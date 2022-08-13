import { ColorSet } from '../color-set';

export class ListColorSet extends ColorSet {
  get() {
    return {
      'list.activeSelectionBackground': `${this.colorPalette.accentColor}30`,
      'list.activeSelectionForeground': this.colorPalette.accentColor,
      'list.focusBackground': this.colorPalette.workbench.list.focusBackground,
      'list.hoverBackground': `${this.colorPalette.accentColor}10`,
      'list.inactiveSelectionBackground': `${this.colorPalette.accentColor}20`,
      'list.inactiveSelectionForeground': this.colorPalette.accentColor,
      'list.highlightForeground': this.colorPalette.accentColor
    };
  }
}
