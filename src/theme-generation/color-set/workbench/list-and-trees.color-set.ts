import * as Color from 'color';
import { ColorSet } from '../color-set';

export class ListAndTreesColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'list.focusBackground': this.colorPalette.workbench.list.focusBackground,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return {
      'list.activeSelectionBackground': this.colorPalette.accent.alpha(0.2),
      'list.activeSelectionForeground': this.colorPalette.accent,
      'list.hoverBackground': this.colorPalette.accent.alpha(0.1),
      'list.inactiveSelectionBackground': this.colorPalette.accent.alpha(0.15),
      'list.inactiveSelectionForeground': this.colorPalette.accent,
      'list.highlightForeground': this.colorPalette.accent
    };
  }
}
