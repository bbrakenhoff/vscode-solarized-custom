import * as Color from 'color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#progress-bar
 */
export class ProgressBarColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return this.propertiesUsingAccentColor();
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return { 'progressBar.background': this.colorPalette.accent };
  }
}
