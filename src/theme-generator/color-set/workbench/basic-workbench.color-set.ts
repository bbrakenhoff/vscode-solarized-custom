import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class BasicWorkbenchColorSet extends ColorSet {
  generate() {
    return {
      'badge.background': this.colorPalette.accentColor,
      'badge.foreground': '#fffcf5',
      'button.background': `${this.colorPalette.accentColor}`,
      errorForeground: `${SolarizedColor.Red}99`,
      focusBorder: `${this.colorPalette.accentColor}99`,
      'titleBar.activeBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : SolarizedColor.Base02,
      'selection.background': this.isGeneratingLightTheme
        ? '#ccc4b0'
        : `${SolarizedColor.Cyan}99`,
      'panel.border': this.colorPalette.borderColor,
      'progressBar.background': this.colorPalette.accentColor
    };
  }
}
