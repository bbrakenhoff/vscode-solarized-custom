import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class DarkThemeColorPalette extends ColorPalette {
  border = '#003847';
  defaultBackground = SolarizedColor.Base03;
  defaultForeground = SolarizedColor.Base0;
  defaultHighlightBackground = SolarizedColor.Base02;
  syntax = {
    comments: SolarizedColor.Base01
  };

  workbench = {
    selectionBackground: `${SolarizedColor.Cyan}99`,
    input: { foreground: SolarizedColor.Base1 },
    activityBar: { foreground: '#fffcf5' },
    dropdown: { background: '#00212B' },
    sideBar: { titleForeground: SolarizedColor.Base1 },
    editorGroup: {
      editorGroup: {
        dropBackground: `${SolarizedColor.Cyan}44`,
        tabsBackgroundOpacity: 80
      },
      tab: {
        activeForeground: SolarizedColor.Base1,
        inactiveBackground: '#00384770',
        inactiveForeground: SolarizedColor.Base1
      }
    },
    list: { focusBackground: '005A6F' },
    statusBar: {
      background:  '#00212B',
      debuggingBackground:  '#00212B',
      foreground:SolarizedColor.Base1,
      noFolderBackground: '#00212B'
    },
    peekView: {
      editor: { background: SolarizedColor.Base02 },
      result: {
        background: '#00384770',
        lineForeground: `${SolarizedColor.Base1}50`
      },
      title: { background: '#00384770' }
    },
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
