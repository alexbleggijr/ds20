import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { ConfigFile } from './config-files.js';
import { Entities } from './entities.js';
import fs from 'fs';

register(StyleDictionary);

StyleDictionary.registerTransform({
  name: 'value/shadow-css',
  type: 'value',
  transform: (token) => {
    if (Array.isArray(token.value) && token.type === 'boxShadow') {
      return token.value
        .map(
          (shadow) =>
            `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`,
        )
        .join(', ');
    } else {
      return token.value;
    }
  },
});

export class Tokens {
  static BRAND_NAMES = Entities.getBrands();

  static async compile() {
    await this.compileGlobal();
    await this.compileBrands();
    await this.compileComponents();
    await this.compileSchemes();
    await this.compileBreakpoints();
    this.compileStorybookThemes();
  }

  static async compileGlobal() {
    const global = new StyleDictionary({
      source: ['src/figma/global-base/*.json'],
      platforms: {
        css: {
          transformGroup: 'css',
          transforms: ['value/shadow-css'],
          buildPath: 'dist/css/',
          files: [
            {
              filter: (token) =>
                token.filePath.includes(`figma/global-base/foundation.json`),
              destination: 'global.css',
              format: 'css/variables',
            },
          ],
        },
        scss: {
          transformGroup: 'scss',
          transforms: ['value/shadow-css'],
          buildPath: 'dist/scss/',
          files: [
            {
              filter: (token) =>
                token.filePath.includes(
                  `src/figma/global-base/foundation.json`,
                ),
              destination: '_global.scss',
              format: 'scss/variables',
            },
          ],
        },
      },
    });

    return global.buildAllPlatforms();
  }

  static async compileBrands() {
    const brandPromises = this.BRAND_NAMES.map((brand) => {
      console.log('==================================================');
      console.log(`Processing: [${brand}]`);

      const brandSD = new StyleDictionary(ConfigFile.brand(brand));

      return brandSD.buildAllPlatforms();
    });

    return Promise.all(brandPromises);
  }

  static async compileComponents() {
    const componentPromises = [];

    this.BRAND_NAMES.forEach((brand) => {
      Entities.getThemes(brand).forEach((theme) => {
        Entities.getComponents(brand, theme).forEach((component) => {
          console.log('==================================================');
          console.log(`Processing: [${brand}] [${theme}] [${component}]`);

          const componentSD = new StyleDictionary(
            ConfigFile.component(brand, theme, component),
          );

          componentPromises.push(componentSD.buildAllPlatforms());
        });
      });
    });

    return Promise.all(componentPromises);
  }

  static async compileSchemes() {
    const schemePromises = [];

    this.BRAND_NAMES.forEach((brand) => {
      Entities.getThemes(brand).forEach((theme) => {
        Entities.getSchemes(brand, theme).forEach((scheme) => {
          console.log('==================================================');
          console.log(`Processing: [${brand}] [${theme}] [${scheme}]`);

          const schemeSD = new StyleDictionary(
            ConfigFile.scheme(brand, theme, scheme),
          );

          schemePromises.push(schemeSD.buildAllPlatforms());
        });
      });
    });

    return Promise.all(schemePromises);
  }

  static async compileBreakpoints() {
    const breakpointPromises = [];

    this.BRAND_NAMES.forEach((brand) => {
      Entities.getThemes(brand).forEach((theme) => {
        Entities.getBreakpoints(brand, theme).forEach((breakpoint) => {
          console.log('==================================================');
          console.log(`Processing: [${brand}] [${theme}] [${breakpoint}]`);

          const breakpointSD = new StyleDictionary(
            ConfigFile.breakpoint(brand, theme, breakpoint),
          );

          breakpointPromises.push(breakpointSD.buildAllPlatforms());
        });
      });
    });

    return Promise.all(breakpointPromises);
  }

  static compileStorybookThemes() {
    const THEMES = {};

    this.BRAND_NAMES.forEach((brand) => {
      Entities.getThemes(brand).forEach((theme) => {
        Entities.getSchemes(brand, theme)
          .map((breakpoint) => breakpoint.replace('.json', ''))
          .forEach((scheme) => {
            Entities.getBreakpoints(brand, theme)
              .map((breakpoint) => breakpoint.replace('.json', ''))
              .forEach((breakpoint) => {
                if (!Object.hasOwn(THEMES, brand)) {
                  THEMES[`${brand}`] = {};
                }

                const themeKey = `${this.capitalize(theme)} · ${this.capitalize(scheme)} · ${this.capitalize(breakpoint.replaceAll('-', ' '))}`;

                THEMES[`${brand}`][themeKey] =
                  `tp-${brand} tp-theme-${theme} tp-scheme-${scheme} tp-breakpoint-${breakpoint}`;
              });
          });
      });
    });

    const FILE_TEXT = `export const THEMES = ${JSON.stringify(THEMES)};`;

    fs.writeFile('./src/utilities/figma.js', FILE_TEXT, (error) => {
      if (error) {
        console.log('Erro ao compilar storybook themes.');
      } else {
        console.log('Compilação do storybook themes finalizada.');
      }
    });
  }

  static capitalize(text) {
    return text.length
      ? text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      : text;
  }
}
