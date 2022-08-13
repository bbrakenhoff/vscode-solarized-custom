import { ColorPalette } from '../color-palette/color-palette';
import { ThemeVariant } from '../theme-variant';

export abstract class ColorSet {
  constructor(
    protected readonly themeVariant: ThemeVariant,
    protected readonly colorPalette: ColorPalette
  ) {}

  protected get isGeneratingLightTheme(): boolean {
    return this.themeVariant === ThemeVariant.Light;
  }

  abstract generate(): any;
}
