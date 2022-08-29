import { ColorPalette } from '../color-palette/color-palette';

export abstract class ColorSet {
  constructor(protected readonly colorPalette: ColorPalette) {}

  abstract propertiesAll(): unknown;

  propertiesUsingAccentColor(): unknown {
    throw new Error('propertiesUsingAccentColor() not implemented!');
  }
}
