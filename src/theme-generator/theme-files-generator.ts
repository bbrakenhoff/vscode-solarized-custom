import * as fs from 'fs';
import { ThemeGenerator } from './theme-generator';
import { ThemeVariant } from './theme-variant';

export class ThemeFilesGenerator {
  static generateAllThemes() {
    Object.values(ThemeVariant).forEach((themeVariant: ThemeVariant) =>
      this.writeThemeFile(themeVariant)
    );
  }

  private static writeThemeFile(themeVariant: ThemeVariant) {
    fs.writeFile(
      this.getThemeFileName(themeVariant),
      this.generatedThemeToJson(themeVariant),
      () => {
        // Do nothing
      }
    );
  }

  private static getThemeFileName(themeVariant: ThemeVariant) {
    return `./dist/themes/solarized-custom-${themeVariant}.json`;
  }

  private static generatedThemeToJson(themeVariant: ThemeVariant) {
    return JSON.stringify(new ThemeGenerator(themeVariant).generate());
  }
}

ThemeFilesGenerator.generateAllThemes();
