import path from 'path';
import { PATHS } from './constants.js';

export class ConfigFile {
  static brand(brand) {
    if (!brand) {
      console.error('Brand not defined!');
      return;
    }

    const selector = `.tp-${brand}`;

    return {
      source: [
        `${PATHS.figma.globalBase}/*.json`,
        `${PATHS.figma.brands}/${brand}/*.json`,
        `${PATHS.figma.globalBase}/patterns/*.json`,
      ],
      platforms: {
        css: {
          buildPath: `${PATHS.dist}/css/`,
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab'],
          files: [
            {
              filter: (token) =>
                token.filePath.includes(
                  `${PATHS.figma.brands}/${brand}/foundation.json`,
                ),
              destination: `${brand}/base.css`,
              format: 'css/variables',
              options: {
                selector: selector,
              },
            },
          ],
        },
        scss: {
          buildPath: `${PATHS.dist}/scss/`,
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab'],
          files: [
            {
              filter: (token) =>
                token.filePath.includes(
                  `${PATHS.figma.brands}/${brand}/foundation.json`,
                ),
              destination: `${brand}/_base.scss`,
              format: 'scss/variables',
              options: {
                selector: selector,
              },
            },
          ],
        },
      },
    };
  }

  static scheme(brand, theme, scheme) {
    return this.get(brand, theme, 'schemes', scheme);
  }

  static breakpoint(brand, theme, breakpoint) {
    return this.get(brand, theme, 'breakpoints', breakpoint);
  }

  static component(brand, theme, component) {
    return this.get(brand, theme, 'components', component);
  }

  static get(brand, theme, entityType, entityValue) {
    if (!brand) {
      console.error('Brand not defined!');
      return;
    }

    const ENTITY_PATH = `${PATHS.figma.brands}/${brand}/themes/${theme}/${entityType}`;

    const selector = this.generateSelectors(
      brand,
      theme,
      entityType,
      entityValue,
    );

    return {
      source: [
        `${PATHS.figma.globalBase}/*.json`,
        `${PATHS.figma.brands}/${brand}/*.json`,
        `${PATHS.figma.brands}/${brand}/themes/${theme}/*.json`,
        `${ENTITY_PATH}/${entityValue}`,
        `${PATHS.figma.brands}/patterns/*.json`,
      ],
      platforms: {
        css: {
          buildPath: `${PATHS.dist}/css/`,
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab'],
          files: [
            {
              filter: (token) =>
                token.filePath.includes(`${ENTITY_PATH}/${entityValue}`),
              destination: `${brand}/themes/${theme}/${entityType}/${entityType === 'components' ? 'components' : path.basename(entityValue, '.json')}.css`,
              format: 'css/variables',
              options: { selector },
            },
            {
              filter: (token) =>
                token.filePath.includes(`${PATHS.figma.brands}/${brand}/themes/${theme}/foundation.json`),
              destination: `${brand}/themes/${theme}/base.css`,
              format: 'css/variables',
              options: { selector },
            },
          ],
        },
        scss: {
          buildPath: `${PATHS.dist}/scss/`,
          transformGroup: 'tokens-studio',
          transforms: ['name/kebab'],
          files: [
            {
              filter: (token) =>
                token.filePath.includes(`${ENTITY_PATH}/${entityValue}`),
              destination: `${brand}/themes/${theme}/${entityType}/_${entityType === 'components' ? 'components' : path.basename(entityValue, '.json')}.scss`,
              format: 'scss/variables',
              options: { selector },
            },
            {
              filter: (token) =>
                token.filePath.includes(`${PATHS.figma.brands}/${brand}/themes/${theme}/foundation.json`),
              destination: `${brand}/themes/${theme}/_base.scss`,
              format: 'scss/variables',
              options: { selector },
            },
          ],
        },
      },
      // Para detalhar possiveis erros e colisões
      // log: {
      //   warnings: 'warn', // 'warn' | 'error' | 'disabled'
      //   verbosity: 'verbose', // 'default' | 'silent' | 'verbose'
      //   errors: {
      //     brokenReferences: 'throw' // 'throw' | 'console'
      //   }
      // }
    };
  }

  static generateSelectors(brand, theme, entityType, entityValue) {
    switch (entityType) {
      case 'schemes':
        return `.tp-${brand}.tp-theme-${theme}.tp-scheme-${path.basename(entityValue, '.json')}`;

      case 'breakpoints':
        return `.tp-${brand}.tp-theme-${theme}.tp-breakpoint-${path.basename(entityValue, '.json')}`;

      case 'components':
        return `.tp-${brand}.tp-theme-${theme}`;
    }
  }
}
