import { SolarizedColor } from '../../../solarized-color';
import { ThemeDependentColorSet } from '../theme-dependent-colors-set';

export class CommandPaletteColorSet extends ThemeDependentColorSet {
  get() {
    return {
      'pickerGroup.border': this.colorPalette.border,
      'pickerGroup.foreground': `${this.colorPalette.accentColor}70`,
      'quickInput.background': this.colorPalette.defaultBackground,
      'quickInputList.focusBackground': `${this.colorPalette.accentColor}30`,
      'quickInputList.focusForeground': this.colorPalette.accentColor
    };
  }
}
