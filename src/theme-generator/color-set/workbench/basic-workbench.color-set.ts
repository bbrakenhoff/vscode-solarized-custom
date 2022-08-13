import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class BasicWorkbenchColorSet extends ColorSet {
  get() {
    return {
      'badge.background': this.colorPalette.accentColor,
      'badge.foreground': '#fffcf5',
      'button.background': `${this.colorPalette.accentColor}`,
      errorForeground: `${SolarizedColor.Red}99`,
      focusBorder: `${this.colorPalette.accentColor}99`,
      'titleBar.activeBackground': this.colorPalette.defaultHighlightBackground,
      'selection.background': this.colorPalette.workbench.selectionBackground,
      'panel.border': this.colorPalette.border,
      'progressBar.background': this.colorPalette.accentColor
    };
  }
}
