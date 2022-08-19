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
      'list.activeSelectionBackground': this.colorPalette.accent.alpha(.2),
      'list.activeSelectionForeground': this.colorPalette.accent,
      'list.hoverBackground': this.colorPalette.accent.alpha(.1),
      'list.inactiveSelectionBackground': this.colorPalette.accent.alpha(.15),
      'list.inactiveSelectionForeground': this.colorPalette.accent,
      'list.highlightForeground': this.colorPalette.accent
    };
  }
}
