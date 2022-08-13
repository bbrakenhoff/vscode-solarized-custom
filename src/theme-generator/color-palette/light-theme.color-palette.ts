import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class LightThemeColorPalette extends ColorPalette {
  border = '#ddd6c1';
  defaultBackground = SolarizedColor.Base3;
  defaultForeground = SolarizedColor.Base00;
  defaultHighlightBackground = SolarizedColor.Base2;
  code = {
    comments: SolarizedColor.Base1
  };
}
