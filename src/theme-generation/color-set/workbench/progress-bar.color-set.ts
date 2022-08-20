import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#progress-bar
 */
export class ProgressBarColorSet extends ColorSet {
  propertiesAll() {
    return this.propertiesUsingAccentColor();
  }

  propertiesUsingAccentColor() {
    return { 'progressBar.background': this.colorPalette.accent };
  }
}
