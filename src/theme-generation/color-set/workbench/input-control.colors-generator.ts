import * as Color from 'color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#input-control
 */
export class InputControlColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'input.background': this.colorPalette.border,
      'input.foreground': this.colorPalette.workbench.inputControl.foreground,
      'input.placeholderForeground':
        this.colorPalette.workbench.inputControl.foreground.alpha(0.65),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return {
      'inputOption.activeBorder': this.colorPalette.accent.alpha(0.5)
    };
  }
}
