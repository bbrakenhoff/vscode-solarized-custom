import { SolarizedColor } from '../../../solarized-color';
import { ThemeDependentColorSet } from '../theme-dependent-colors-set';

export class DebugToolsColorsGenerator extends ThemeDependentColorSet {
  get() {
    return {
      'debugExceptionWidget.background': this.colorPalette.border,
      'debugExceptionWidget.border': SolarizedColor.Red,
      'debugToolBar.background': this.colorPalette.border
    };
  }
}
