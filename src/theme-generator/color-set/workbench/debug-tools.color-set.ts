import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class DebugToolsColorsGenerator extends ColorSet {
  propertiesAll() {
    return {
      'debugExceptionWidget.background': this.colorPalette.border,
      'debugExceptionWidget.border': SolarizedColor.Red.color.hexa(),
      'debugToolBar.background': this.colorPalette.border
    };
  }
}
