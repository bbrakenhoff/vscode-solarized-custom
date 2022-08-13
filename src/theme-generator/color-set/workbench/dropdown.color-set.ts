import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class DropdownColorSet extends ColorSet {
  generate() {
    return {
      'dropdown.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'dropdown.border': `${this.colorPalette.accentColor}80`
    };
  }
}
