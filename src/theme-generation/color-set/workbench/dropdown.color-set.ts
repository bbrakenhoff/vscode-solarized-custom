import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#dropdown-control
 */
export class DropdownColorSet extends ColorSet {
  propertiesAll() {
    return {
      'dropdown.background': this.colorPalette.workbench.dropdown.background,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return { 'dropdown.border': this.colorPalette.accent.alpha(0.5) };
  }
}
