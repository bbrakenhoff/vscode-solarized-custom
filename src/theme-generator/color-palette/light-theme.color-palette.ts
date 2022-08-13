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
  workbench = {
    selectionBackground: '#ccc4b0',
    activityBar: { foreground: SolarizedColor.Base03 },
    dropdown: { background: SolarizedColor.Base2 },
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
      wordHighlight: { background: SolarizedColor.Base1 }
    }
  };
}
