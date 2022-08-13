import * as fs from 'fs';
import { SolarizedColor } from './solarized-color';
import { ThemeColorSet } from './theme-generator/theme-generator';
import { getColorPalette as getColorPaletteForThemeVariant, ThemeVariant } from './theme-generator/theme-variant';

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
      new ThemeColorSet(
        themeVariant,
        getColorPaletteForThemeVariant(themeVariant, accentColor)
      ).generate()
    );
  }
}
