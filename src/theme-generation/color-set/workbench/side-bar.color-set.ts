import * as Color from 'color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#side-bar
 */
export class SideBarColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'sideBar.background': this.colorPalette.defaultBackground,
      'sideBar.border': this.colorPalette.border,
      'sideBarTitle.foreground':
        this.colorPalette.workbench.sideBar.titleForeground
    };
  }
}
