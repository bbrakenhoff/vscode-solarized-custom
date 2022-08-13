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

  workbench = {
    selectionBackground: `${SolarizedColor.Cyan}99`,
    activityBar: { foreground: '#fffcf5' },
    dropdown: { background: '#00212B' },
    editor: {
      brackets: {
        matchBackground: '#00212B',
        matchBorder: `${SolarizedColor.Base01}70`
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base00,
        foreground: `${SolarizedColor.Base00}80`
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base1,
        background: `${SolarizedColor.Base1}20`
      },
      wordHighlight: { background: SolarizedColor.Base01 }
    }
  };
}
