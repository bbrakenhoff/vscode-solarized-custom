import { ColorSet } from '../color-set';

export class ListColorSet extends ColorSet {
  propertiesAll() {
    return {
      'list.focusBackground': this.colorPalette.workbench.list.focusBackground.hexa(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'list.activeSelectionBackground': this.colorPalette.accent.alpha(.2).hexa(),
      'list.activeSelectionForeground': this.colorPalette.accent.hexa(),
      'list.hoverBackground': this.colorPalette.accent.alpha(.1).hexa(),
      'list.inactiveSelectionBackground': this.colorPalette.accent.alpha(.15).hexa(),
      'list.inactiveSelectionForeground': this.colorPalette.accent.hexa(),
      'list.highlightForeground': this.colorPalette.accent.hexa()
    };
  }
}
