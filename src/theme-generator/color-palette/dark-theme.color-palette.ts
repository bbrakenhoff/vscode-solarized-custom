import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class DarkThemeColorPalette extends ColorPalette {
  border = '#003847';
  defaultBackground = SolarizedColor.Base03.color.hex();
  defaultForeground = SolarizedColor.Base0.color.hex();
  defaultHighlightBackground = SolarizedColor.Base02.color.hex();
  syntax = {
    comments: SolarizedColor.Base01.color.hex()
  };

  workbench = {
    selectionBackground: `${SolarizedColor.Cyan.color.hex()}99`,
    input: { foreground: SolarizedColor.Base1.color.hex() },
    activityBar: { foreground: '#fffcf5' },
    dropdown: { background: '#00212B' },
    sideBar: { titleForeground: SolarizedColor.Base1.color.hex() },
    editorGroup: {
      editorGroup: {
        dropBackground: `${SolarizedColor.Cyan.color.hex()}44`,
        tabsBackgroundOpacity: 80
      },
      tab: {
        activeForeground: SolarizedColor.Base1.color.hex(),
        inactiveBackground: '#00384770',
        inactiveForeground: SolarizedColor.Base1.color.hex()
      }
    },
    list: { focusBackground: '005A6F' },
    statusBar: {
      background: '#00212B',
      debuggingBackground: '#00212B',
      foreground: SolarizedColor.Base1.color.hex(),
      noFolderBackground: '#00212B'
    },
    peekView: {
      editor: { background: SolarizedColor.Base02.color.hex() },
      result: {
        background: '#00384770',
        lineForeground: `${SolarizedColor.Base1.color.hex()}50`
      },
      title: { background: '#00384770' }
    },
    editor: {
      brackets: {
        matchBackground: '#00212B',
        matchBorder: `${SolarizedColor.Base01.color.hex()}70`
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base00.color.hex(),
        foreground: `${SolarizedColor.Base00.color.hex()}80`
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base1.color.hex(),
        background: `${SolarizedColor.Base1.color.hex()}20`
      },
      wordHighlight: { background: SolarizedColor.Base01.color.hex() }
    }
  };
}
