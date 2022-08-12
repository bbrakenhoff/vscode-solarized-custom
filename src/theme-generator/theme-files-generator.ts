import * as fs from 'fs';
import { SolarizedColor } from '../solarized-color';
import { ThemeGenerator } from './theme-generator';
import { ThemeVariant } from './theme-variant';

export class ThemeFilesGenerator {
  static generateAllThemes(accentColor: SolarizedColor) {
    Object.values(ThemeVariant).forEach((themeVariant: ThemeVariant) =>
      this.writeThemeFile(themeVariant, accentColor)
    );
  }

  private static writeThemeFile(
    themeVariant: ThemeVariant,
    accentColor: SolarizedColor
  ) {
    fs.writeFile(
      this.getThemeFileName(themeVariant),
      this.generatedThemeToJson(themeVariant, accentColor),
      () => {
        // Do nothing
      }
    );
  }

  private static getThemeFileName(themeVariant: ThemeVariant) {
    return `./dist/themes/solarized-custom-${themeVariant}.json`;
  }

  private static generatedThemeToJson(
    themeVariant: ThemeVariant,
    accentColor: SolarizedColor
  ) {
    return JSON.stringify(
      new ThemeGenerator(themeVariant, accentColor).generate()
    );
  }
}
