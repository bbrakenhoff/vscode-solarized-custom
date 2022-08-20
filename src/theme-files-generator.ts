import * as fs from 'fs';
import { SolarizedColor } from './solarized-color';
import { ThemeGeneratorFactory } from './theme-generation/theme-generator-factory';
import { ThemeVariant } from './theme-generation/theme-variant';

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
    fs.writeFileSync(
      this.getThemeFileName(themeVariant),
      this.generatedThemeToJson(themeVariant, accentColor)
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
      ThemeFilesGenerator.generateThemeColorSetToTheme(
        themeVariant,
        accentColor
      )
    );
  }

  private static generateThemeColorSetToTheme(
    themeVariant: ThemeVariant,
    accentColor: SolarizedColor
  ) {
    return new ThemeGeneratorFactory(themeVariant, accentColor)
      .createThemeGenerator()
      .generateFull();
  }
}
