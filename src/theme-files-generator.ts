import * as fs from 'fs';
import { SolarizedColor } from './solarized-color';
import { ColorPaletteFactory } from './theme-generation/color-palette/color-palette-factory';
import { ThemeGenerator } from './theme-generation/theme-generator';
import { ThemeVariant } from './theme-generation/theme-variant';
import { ThemeColorSet } from './theme-generation/color-set/theme.color-set';

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
    return new ThemeGenerator(
      new ThemeColorSet(
        themeVariant,
        ColorPaletteFactory.createColorPaletteForThemeVariant(
          themeVariant,
          accentColor
        )
      )
    ).generateFull();
  }
}
