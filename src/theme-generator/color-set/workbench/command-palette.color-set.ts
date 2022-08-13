import { ColorSet } from '../color-set';

export class CommandPaletteColorSet extends ColorSet {
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
