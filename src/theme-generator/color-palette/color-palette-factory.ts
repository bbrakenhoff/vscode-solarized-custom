import { SolarizedColor } from '../../solarized-color';
import { ThemeVariant } from '../theme-variant';
import { DarkThemeColorPalette } from './dark-theme.color-palette';
import { LightThemeColorPalette } from './light-theme.color-palette';

export class ColorPaletteFactory {
  static createColorPaletteForThemeVariant(
    themeVariant: ThemeVariant,
    accentColor: string
  ) {
    switch (themeVariant) {
      case ThemeVariant.Dark:
        return new DarkThemeColorPalette(accentColor);
      case ThemeVariant.Light:
        return new LightThemeColorPalette(accentColor);
    }
  }
}
