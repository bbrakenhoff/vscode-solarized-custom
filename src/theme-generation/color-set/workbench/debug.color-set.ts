import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#debug-colors
 */
export class DebugColorSet extends ColorSet {
  propertiesAll() {
    return {
      'debugToolBar.background': this.colorPalette.border
    };
  }
}
