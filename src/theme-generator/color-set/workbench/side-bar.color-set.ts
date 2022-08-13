import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class SideBarColorSet extends ColorSet {
  generate() {
    return {
      'sideBar.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'sideBar.border': this.colorPalette.borderColor,
      'sideBarTitle.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1
    };
  }
}
