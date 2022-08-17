import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class BasicWorkbenchColorSet extends ColorSet {
  propertiesAll() {
    return {
      'badge.foreground': '#fffcf5',
      errorForeground: `${SolarizedColor.Red.color.hex()}99`,
      'titleBar.activeBackground': this.colorPalette.defaultHighlightBackground,
      'selection.background': this.colorPalette.workbench.selectionBackground,
      'panel.border': this.colorPalette.border,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'badge.background': this.colorPalette.accent,
      'button.background': `${this.colorPalette.accent}`,
      focusBorder: `${this.colorPalette.accent}99`,
      'progressBar.background': this.colorPalette.accent
    };
  }
}
