import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class LightThemeColorPalette extends ColorPalette {
  border = '#ddd6c1';
  defaultBackground = SolarizedColor.Base3;
  defaultForeground = SolarizedColor.Base00;
  defaultHighlightBackground = SolarizedColor.Base2;
  syntax = {
    comments: SolarizedColor.Base1
  };
  workbench = {
    selectionBackground: '#ccc4b0',
    input: { foreground: SolarizedColor.Base01 },
    activityBar: { foreground: SolarizedColor.Base03 },
    dropdown: { background: SolarizedColor.Base2 },
    sideBar: { titleForeground: SolarizedColor.Base01 },
    editorGroup: {
      editorGroup: {
        dropBackground: '#ddd6c1aa',
        tabsBackgroundOpacity: 50
      },
      tab: {
        activeForeground: SolarizedColor.Base01,
        inactiveBackground: '#d3cbb790',
        inactiveForeground: SolarizedColor.Base01
      }
    },
    list: { focusBackground: '#D1CBB895' },
    statusBar: {
      background: SolarizedColor.Base2,
      debuggingBackground: SolarizedColor.Base2,
      foreground: SolarizedColor.Base01,
      noFolderBackground: SolarizedColor.Base2
    },
    peekView: {
      editor: { background: '#ddd6c150' },
      result: {
        background: '#d3cbb790',
        lineForeground: `${SolarizedColor.Base00}80`
      },
      title: { background: '#d3cbb790' }
    },
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
