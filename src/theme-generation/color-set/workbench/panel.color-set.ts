import * as Color from 'color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#panel-colors
 */
export class PanelColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return { 'panel.border': this.colorPalette.border };
  }
}
