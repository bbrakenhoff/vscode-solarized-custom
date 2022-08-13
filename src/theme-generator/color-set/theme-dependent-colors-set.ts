import { ColorPalette } from '../color-palette/color-palette';
import { ThemeVariant } from '../theme-variant';
import { ColorSet } from './color-set';

export abstract class ThemeDependentColorSet extends ColorSet {
  constructor(
    protected readonly themeVariant: ThemeVariant,
   colorPalette: ColorPalette
  ) {
    super(colorPalette)
  }

  protected get isGeneratingLightTheme(): boolean {
    return this.themeVariant === ThemeVariant.Light;
  }
}
