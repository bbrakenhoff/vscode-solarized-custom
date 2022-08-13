import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class BasicWorkbenchColorSet extends ColorSet {
  get() {
    return {
      'badge.background': this.colorPalette.accent,
      'badge.foreground': '#fffcf5',
      'button.background': `${this.colorPalette.accent}`,
      errorForeground: `${SolarizedColor.Red}99`,
      focusBorder: `${this.colorPalette.accent}99`,
      'titleBar.activeBackground': this.colorPalette.defaultHighlightBackground,
      'selection.background': this.colorPalette.workbench.selectionBackground,
      'panel.border': this.colorPalette.border,
      'progressBar.background': this.colorPalette.accent
    };
  }
}
