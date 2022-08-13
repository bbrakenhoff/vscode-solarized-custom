import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class SideBarColorSet extends ColorSet {
  generate() {
    return {
      'sideBar.background': this.colorPalette.defaultBackground,
      'sideBar.border': this.colorPalette.border,
      'sideBarTitle.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1
    };
  }
}
