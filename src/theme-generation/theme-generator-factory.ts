import { SolarizedColor } from '../solarized-color';
import { ThemeColorSet } from './color-set/theme.color-set';
import { ThemeGenerator } from './theme-generator';
import { ThemeVariant } from './theme-variant';
import { DarkThemeColorPalette } from './color-palette/dark-theme.color-palette';
import { LightThemeColorPalette } from './color-palette/light-theme.color-palette';

export class ThemeGeneratorFactory {
  constructor(
    private themeVariant: ThemeVariant,
    private accentColor: SolarizedColor
  ) {}

  createThemeGenerator() {
    return new ThemeGenerator(this.createThemeColorSet());
  }

  private createThemeColorSet() {
    return new ThemeColorSet(this.themeVariant, this.createColorPalette());
  }

  private createColorPalette() {
    switch (this.themeVariant) {
      case ThemeVariant.Dark:
        return new DarkThemeColorPalette(this.accentColor);
      case ThemeVariant.Light:
        return new LightThemeColorPalette(this.accentColor);
    }
  }
}
