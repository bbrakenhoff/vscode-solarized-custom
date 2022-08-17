import { SolarizedColorEnum } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class DebugToolsColorsGenerator extends ColorSet {
  propertiesAll() {
    return {
      'debugExceptionWidget.background': this.colorPalette.border,
      'debugExceptionWidget.border': SolarizedColorEnum.Red,
      'debugToolBar.background': this.colorPalette.border
    };
  }
}
