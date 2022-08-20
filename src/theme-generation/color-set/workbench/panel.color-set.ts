import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#panel-colors
 */
export class PanelColorSet extends ColorSet {
  propertiesAll() {
    return {
      'panel.border': this.colorPalette.border 
    };
  }
}
