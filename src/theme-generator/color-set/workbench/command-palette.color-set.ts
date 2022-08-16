import { ColorSet } from '../color-set';

export class CommandPaletteColorSet extends ColorSet {
  propertiesAll() {
    return {
      'pickerGroup.border': this.colorPalette.border,
      'quickInput.background': this.colorPalette.defaultBackground,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'pickerGroup.foreground': `${this.colorPalette.accent}70`,
      'quickInputList.focusBackground': `${this.colorPalette.accent}30`,
      'quickInputList.focusForeground': this.colorPalette.accent
    };
  }
}
