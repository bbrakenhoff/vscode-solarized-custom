import { SolarizedColor } from '../solarized-color';
import { ColorPalette } from './color-palette/color-palette';
import { DarkThemeColorPalette } from './color-palette/dark-theme.color-palette';
import { LightThemeColorPalette } from './color-palette/light-theme.color-palette';

export enum ThemeVariant {
  Light = 'light',
  Dark = 'dark'
}

export function getColorPalette(
  themeVariant: ThemeVariant,
  accentColor: SolarizedColor
): ColorPalette {
  switch (themeVariant) {
    case ThemeVariant.Dark:
      return new DarkThemeColorPalette(accentColor);
    case ThemeVariant.Light:
      return new LightThemeColorPalette(accentColor);
  }
}
