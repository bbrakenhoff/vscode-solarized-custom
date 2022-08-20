import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#title-bar-colors
 */
export class TitleBarColorSet extends ColorSet {
  propertiesAll() {
    return {
      'titleBar.activeBackground': this.colorPalette.defaultHighlightBackground
    };
  }
}
