import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#button-control
 */
export class ButtonControlColorSet extends ColorSet {
  propertiesAll() {
    return this.propertiesUsingAccentColor();
  }

  propertiesUsingAccentColor() {
    return { 'button.background': this.colorPalette.accent };
  }
}
