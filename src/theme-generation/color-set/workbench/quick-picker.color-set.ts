import * as Color from 'color';
import { ColorSet } from '../color-set';

/**
 * Used for Command Palette
 * @See https://code.visualstudio.com/api/references/theme-color#quick-picker-colors
 */
export class QuickPickerColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'pickerGroup.border': this.colorPalette.border,
      'quickInput.background': this.colorPalette.defaultBackground,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return {
      'pickerGroup.foreground': this.colorPalette.accent.alpha(0.5),
      'quickInputList.focusBackground': this.colorPalette.accent.alpha(0.2),
      'quickInputList.focusForeground': this.colorPalette.accent
    };
  }
}
