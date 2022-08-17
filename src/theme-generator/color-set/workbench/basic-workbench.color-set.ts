import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class BasicWorkbenchColorSet extends ColorSet {
  propertiesAll() {
    return {
      'badge.foreground': '#fffcf5',
      errorForeground: SolarizedColor.Red.color.alpha(0.5).hexa(),
      'titleBar.activeBackground': this.colorPalette.defaultHighlightBackground,
      'selection.background': this.colorPalette.workbench.selectionBackground,
      'panel.border': this.colorPalette.border,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'badge.background': this.colorPalette.accent.hexa(),
      'button.background': `${this.colorPalette.accent.hexa()}`,
      focusBorder: this.colorPalette.accent.alpha(0.5).hexa(),
      'progressBar.background': this.colorPalette.accent.hexa()
    };
  }
}
