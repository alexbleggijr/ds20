const { execSync } = require('child_process');

// regular expression to enforce branch naming convention
const branchPattern =
  /^(angular-material|icons|interactions|ionic-5|ionic-6|ionic-7|ionic-8|shared|tokens|utilities|web-components)+\/(feat|fix|docs|style|refactor|test|build|ci|chore)\/[a-z0-9\-]+$/;

// get the current branch name
const branchName = execSync('git rev-parse --abbrev-ref HEAD')
  .toString()
  .trim();

// check if the branch name matches the pattern
if (!branchPattern.test(branchName)) {
  console.error(
    `Invalid branch name: ${branchName}. Branch names must match the pattern: {package}/{type}/task-to-be-done,`,
  );
  console.log('');
  console.warn(
    `{package}: 
      - angular-material 
      - icons
      - interactions
      - ionic-5
      - ionic-6
      - ionic-7
      - ionic-8
      - shared
      - tokens
      - utilities
      - web-components`,
  );
  console.warn(`
    {type}: 
      - feat: a new feature
      - fix: a bug fix
      - docs: documentation only (readme, jsDoc, storybook)
      - style: code formatting only (prettier, stylelint, ESLint)
      - refactor: code refactoring
      - test: unit or visual regression
      - build: TODO
      - ci: TODO
      - chore: other changes that don't modify 'src' or 'test' files
    `);
  process.exit(1); // exit with error code to block commit/push
}

console.log(`branch name "${branchName}" is valid.`);
