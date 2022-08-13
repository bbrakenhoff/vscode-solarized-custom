import { SolarizedColor } from '../../../solarized-color';
import { ThemeDependentColorSet } from '../theme-dependent-colors-set';

export class SideBarColorSet extends ThemeDependentColorSet {
  get() {
    return {
      'sideBar.background': this.colorPalette.defaultBackground,
      'sideBar.border': this.colorPalette.border,
      'sideBarTitle.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1
    };
  }
}
