import { ThemeDependentColorSet } from "../theme-dependent-colors-set";

export class ListColorSet extends ThemeDependentColorSet{

  get() {
    return {
      'list.activeSelectionBackground': `${this.colorPalette.accentColor}30`,
      'list.activeSelectionForeground': this.colorPalette.accentColor,
      'list.focusBackground': this.isGeneratingLightTheme
        ? '#D1CBB895'
        : '#005A6F',
      'list.hoverBackground': `${this.colorPalette.accentColor}10`,
      'list.inactiveSelectionBackground': `${this.colorPalette.accentColor}20`,
      'list.inactiveSelectionForeground': this.colorPalette.accentColor,
      'list.highlightForeground': this.colorPalette.accentColor
    };
  }
}