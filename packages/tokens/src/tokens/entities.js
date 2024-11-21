import fs from 'fs';
import { PATHS } from './constants.js';

export class Entities {
  static getBrands() {
    try {
      return fs
        .readdirSync(`${PATHS.figma.brands}`, {
          withFileTypes: true,
        })
        .filter((dirent) => dirent.isDirectory() && dirent.name !== 'patterns')
        .map((dirent) => dirent.name);
    } catch (error) {
      console.error('Error reading folder:', error);
      return [];
    }
  }

  static getThemes(brand) {
    return this.get(brand);
  }

  static getComponents(brand, theme) {
    return this.get(brand, theme, 'components', '.json');
  }

  static getSchemes(brand, theme) {
    return this.get(brand, theme, 'schemes', '.json');
  }

  static getBreakpoints(brand, theme) {
    return this.get(brand, theme, 'breakpoints', '.json');
  }

  static get(brand, theme = null, entity = null, fileExtension = null) {
    try {
      const BRANDS_FOLDER_PATH = theme
        ? `${PATHS.figma.brands}/${brand}/themes/${theme}/${entity}`
        : `${PATHS.figma.brands}/${brand}/themes`;

      return fs
        .readdirSync(`${BRANDS_FOLDER_PATH}`, {
          withFileTypes: true,
        })
        .filter((dirent) => {
          if (fileExtension) {
            return dirent.isFile() && dirent.name.endsWith(fileExtension);
          }
          return dirent.isDirectory();
        })
        .map((dirent) => dirent.name);
    } catch (error) {
      console.error('Error reading folder:', error);
      return [];
    }
  }
}
