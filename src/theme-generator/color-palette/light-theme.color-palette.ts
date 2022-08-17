import { SolarizedColorEnum } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class LightThemeColorPalette extends ColorPalette {
  border = '#ddd6c1';
  defaultBackground = SolarizedColorEnum.Base3;
  defaultForeground = SolarizedColorEnum.Base00;
  defaultHighlightBackground = SolarizedColorEnum.Base2;
  syntax = {
    comments: SolarizedColorEnum.Base1
  };
  workbench = {
    selectionBackground: '#ccc4b0',
    input: { foreground: SolarizedColorEnum.Base01 },
    activityBar: { foreground: SolarizedColor.Base03.name },
    dropdown: { background: SolarizedColorEnum.Base2 },
    sideBar: { titleForeground: SolarizedColorEnum.Base01 },
    editorGroup: {
      editorGroup: {
        dropBackground: '#ddd6c1aa',
        tabsBackgroundOpacity: 50
      },
      tab: {
        activeForeground: SolarizedColorEnum.Base01,
        inactiveBackground: '#d3cbb790',
        inactiveForeground: SolarizedColorEnum.Base01
      }
    },
    list: { focusBackground: '#D1CBB895' },
    statusBar: {
      background: SolarizedColorEnum.Base2,
      debuggingBackground: SolarizedColorEnum.Base2,
      foreground: SolarizedColorEnum.Base01,
      noFolderBackground: SolarizedColorEnum.Base2
    },
    peekView: {
      editor: { background: '#ddd6c150' },
      result: {
        background: '#d3cbb790',
        lineForeground: `${SolarizedColorEnum.Base00}80`
      },
      title: { background: '#d3cbb790' }
    },
    editor: {
      brackets: {
        matchBackground: `${SolarizedColorEnum.Base1}50`,
        matchBorder: '#ccc4b0'
      },
      lineNumber: {
        activeForeground: SolarizedColorEnum.Base1,
        foreground: `${SolarizedColorEnum.Base1}50`
      },
      indentGuide: {
        activeBackground: SolarizedColorEnum.Base01,
        background: `${SolarizedColorEnum.Base1}50`
      },
      wordHighlight: { background: SolarizedColorEnum.Base1 }
    }
  };
}
