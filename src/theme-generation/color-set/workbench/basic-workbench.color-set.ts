import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class BasicWorkbenchColorSet extends ColorSet {
  propertiesAll() {
    return {
      'badge.foreground': SolarizedColor.Base3.color,
      errorForeground: SolarizedColor.Red.color.alpha(0.5),
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
      focusBorder: this.colorPalette.accent.alpha(0.5),
      'progressBar.background': this.colorPalette.accent
    };
  }
}
