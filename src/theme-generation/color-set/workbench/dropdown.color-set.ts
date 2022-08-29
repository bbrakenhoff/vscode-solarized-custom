import * as Color from 'color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#dropdown-control
 */
export class DropdownColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'dropdown.background': this.colorPalette.workbench.dropdown.background,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return { 'dropdown.border': this.colorPalette.accent.alpha(0.5) };
  }
}
