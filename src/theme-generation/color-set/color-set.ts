import { ColorPalette } from '../color-palette/color-palette';

export abstract class ColorSet {
  constructor(protected readonly colorPalette: ColorPalette) {}

  abstract propertiesAll(): any;

  propertiesUsingAccentColor(): any {
    throw new Error('propertiesUsingAccentColor() not implemented!');
  }
}
