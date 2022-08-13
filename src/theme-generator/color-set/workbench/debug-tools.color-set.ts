import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class DebugToolsColorsGenerator extends ColorSet {
  generate() {
    return {
      'debugExceptionWidget.background': this.colorPalette.borderColor,
      'debugExceptionWidget.border': SolarizedColor.Red,
      'debugToolBar.background': this.colorPalette.borderColor
    };
  }
}
