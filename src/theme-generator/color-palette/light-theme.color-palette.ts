import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class LightThemeColorPalette extends ColorPalette {
  border = '#ddd6c1';
  defaultBackground = SolarizedColor.Base3;
  defaultActiveForeground;
  defaultForeground = SolarizedColor.Base00;
  defaultHighlightBackground = SolarizedColor.Base2;
  code = {
    comments: SolarizedColor.Base1
  };
  workbench = {
    editor: {
      brackets: {
        matchBackground: `${SolarizedColor.Base1}50`,
        matchBorder: '#ccc4b0'
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base1,
        foreground: `${SolarizedColor.Base1}50`
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base01,
        background: `${SolarizedColor.Base1}50`
      },
      wordHighlight: {
        background: SolarizedColor.Base1
      }
    }
  };
}
