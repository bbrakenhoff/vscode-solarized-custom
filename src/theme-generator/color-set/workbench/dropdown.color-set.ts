import { SolarizedColor } from '../../../solarized-color';
import { ThemeDependentColorSet } from '../theme-dependent-colors-set';

export class DropdownColorSet extends ThemeDependentColorSet {
  get() {
    return {
      'dropdown.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'dropdown.border': `${this.colorPalette.accentColor}80`
    };
  }
}
