import { ColorSet } from '../color-set';

export class ListColorSet extends ColorSet {
  propertiesAll() {
    return {
      'list.focusBackground': this.colorPalette.workbench.list.focusBackground,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'list.activeSelectionBackground': `${this.colorPalette.accent}30`,
      'list.activeSelectionForeground': this.colorPalette.accent,
      'list.hoverBackground': `${this.colorPalette.accent}10`,
      'list.inactiveSelectionBackground': `${this.colorPalette.accent}20`,
      'list.inactiveSelectionForeground': this.colorPalette.accent,
      'list.highlightForeground': this.colorPalette.accent
    };
  }
}
