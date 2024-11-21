# Documentation

## Package's npm Scripts

- **start**: executes a node server for development purposes.
- **build**: generates a compiled build locally in the package.
- **publish**: generates a compiled build in the monorepo root ready for distribution.

## Branch naming

```
package/verb/task
```

### Package

The main package which the task is been developed.

### Verbs

Must follow [conventional commits 2.0](https://www.conventionalcommits.org/en/v1.0.0/).

- feat (a new feature)
- fix (a bug fix)
- docs (readme / storybook)
- style (code formatting only)
- refactor (code refactoring)
- test (unit or visual regression)
- build (TODO)
- ci (TODO)
- chore (other changes that don't modify `src` or `test` files)

### Examples

#### feat

Must contain all tasks related:

- `add` of tests
- `add` of documentation

```
icons/feat/circle-icon
```

#### fix

Must contain all tasks related:

- `update` of tests
- `update` of documentation

```
interactions/fix/chain-animation
```

#### docs

Must contain all tasks related:

- `add/fix/update` of documentation

```
ionic-8/docs/button
```

#### test

Must contain all tasks related:

- `add/fix/update` of tests
- `add/fix/update` of documentation

```
ionic-8/test/avatar
```

#### style

TODO

#### refactor

Must contain all tasks related:

- `add/update` of tests
- `add/update` of documentation

```
utilities/refactor/breakpoint-class
```

#### test

TODO

#### build

TODO

#### CI

TODO

#### chore

```
web-components/chore/tsconfig-update
```
