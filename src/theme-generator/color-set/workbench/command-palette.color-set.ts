import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class CommandPaletteColorSet extends ColorSet {
  generate() {
    return {
      'pickerGroup.border': this.colorPalette.border,
      'pickerGroup.foreground': `${this.colorPalette.accentColor}70`,
      'quickInput.background': this.colorPalette.defaultBackground,
      'quickInputList.focusBackground': `${this.colorPalette.accentColor}30`,
      'quickInputList.focusForeground': this.colorPalette.accentColor
    };
  }
}
