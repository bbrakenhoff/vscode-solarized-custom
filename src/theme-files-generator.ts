import * as fs from 'fs';
import { SolarizedColor } from './solarized-color';
import { DarkThemeColorPalette } from './theme-generator/color-palette/dark-theme.color-palette';
import { LightThemeColorPalette } from './theme-generator/color-palette/light-theme.color-palette';
import { ThemeColorSet } from './theme-generator/theme-generator';
import { ThemeVariant } from './theme-generator/theme-variant';

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
        this.getColorPaletteForThemeVariant(themeVariant, accentColor)
      ).propertiesAll()
    );
  }

  private static getColorPaletteForThemeVariant(
    themeVariant: ThemeVariant,
    accentColor: SolarizedColor
  ) {
    switch (themeVariant) {
      case ThemeVariant.Dark:
        return new DarkThemeColorPalette(accentColor);
      case ThemeVariant.Light:
        return new LightThemeColorPalette(accentColor);
    }
  }
}
