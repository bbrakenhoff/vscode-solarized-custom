import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class CommandPaletteColorSet extends ColorSet {
  generate() {
    return {
      'pickerGroup.border': this.colorPalette.borderColor,
      'pickerGroup.foreground': `${this.colorPalette.accentColor}70`,
      'quickInput.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'quickInputList.focusBackground': `${this.colorPalette.accentColor}30`,
      'quickInputList.focusForeground': this.colorPalette.accentColor
    };
  }
}
