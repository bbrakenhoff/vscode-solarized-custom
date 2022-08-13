import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class DarkThemeColorPalette extends ColorPalette {
  border = '#003847';
  defaultBackground = SolarizedColor.Base03;
  defaultForeground = SolarizedColor.Base0;
  defaultHighlightBackground = SolarizedColor.Base02;
  code = {
    comments: SolarizedColor.Base01
  };
}
