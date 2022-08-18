import { ColorSet } from '../color-set';

export class CommandPaletteColorSet extends ColorSet {
  propertiesAll() {
    return {
      'pickerGroup.border': this.colorPalette.border.hexa(),
      'quickInput.background': this.colorPalette.defaultBackground.hexa(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'pickerGroup.foreground': this.colorPalette.accent.alpha(0.5).hexa(),
      'quickInputList.focusBackground': this.colorPalette.accent
        .alpha(0.2)
        .hexa(),
      'quickInputList.focusForeground': this.colorPalette.accent.hexa()
    };
  }
}
