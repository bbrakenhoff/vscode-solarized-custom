import * as Color from 'color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#debug-colors
 */
export class DebugColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'debugToolBar.background': this.colorPalette.border
    };
  }
}
