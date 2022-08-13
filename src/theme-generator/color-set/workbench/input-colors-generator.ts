import { SolarizedColor } from '../../../solarized-color';
import { ThemeDependentColorSet } from '../theme-dependent-colors-set';

export class InputColorsGenerator extends ThemeDependentColorSet {
  get() {
    return {
      'input.background': this.colorPalette.border,
      'input.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1,
      'input.placeholderForeground': `${
        this.isGeneratingLightTheme
          ? SolarizedColor.Base01
          : SolarizedColor.Base1
      }aa`,
      'inputOption.activeBorder': `${this.colorPalette.accentColor}70`
    };
  }
}
