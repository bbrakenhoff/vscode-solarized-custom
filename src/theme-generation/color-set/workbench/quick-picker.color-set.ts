import { ColorSet } from '../color-set';

/**
 * Used for Command Palette 
 * @See https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
 */
export class QuickPickerColorSet extends ColorSet {
  propertiesAll() {
    return {
      'pickerGroup.border': this.colorPalette.border,
      'quickInput.background': this.colorPalette.defaultBackground,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'pickerGroup.foreground': this.colorPalette.accent.alpha(0.5),
      'quickInputList.focusBackground': this.colorPalette.accent
        .alpha(0.2)
        ,
      'quickInputList.focusForeground': this.colorPalette.accent
    };
  }
}
