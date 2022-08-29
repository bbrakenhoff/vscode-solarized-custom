import * as Color from 'color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#button-control
 */
export class ButtonControlColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return this.propertiesUsingAccentColor();
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return { 'button.background': this.colorPalette.accent };
  }
}
