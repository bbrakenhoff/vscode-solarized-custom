import { SolarizedColorEnum } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class DarkThemeColorPalette extends ColorPalette {
  border = '#003847';
  defaultBackground = SolarizedColor.Base03.name;
  defaultForeground = SolarizedColorEnum.Base0;
  defaultHighlightBackground = SolarizedColorEnum.Base02;
  syntax = {
    comments: SolarizedColorEnum.Base01
  };

  workbench = {
    selectionBackground: `${SolarizedColorEnum.Cyan}99`,
    input: { foreground: SolarizedColorEnum.Base1 },
    activityBar: { foreground: '#fffcf5' },
    dropdown: { background: '#00212B' },
    sideBar: { titleForeground: SolarizedColorEnum.Base1 },
    editorGroup: {
      editorGroup: {
        dropBackground: `${SolarizedColorEnum.Cyan}44`,
        tabsBackgroundOpacity: 80
      },
      tab: {
        activeForeground: SolarizedColorEnum.Base1,
        inactiveBackground: '#00384770',
        inactiveForeground: SolarizedColorEnum.Base1
      }
    },
    list: { focusBackground: '005A6F' },
    statusBar: {
      background:  '#00212B',
      debuggingBackground:  '#00212B',
      foreground:SolarizedColorEnum.Base1,
      noFolderBackground: '#00212B'
    },
    peekView: {
      editor: { background: SolarizedColorEnum.Base02 },
      result: {
        background: '#00384770',
        lineForeground: `${SolarizedColorEnum.Base1}50`
      },
      title: { background: '#00384770' }
    },
    editor: {
      brackets: {
        matchBackground: '#00212B',
        matchBorder: `${SolarizedColorEnum.Base01}70`
      },
      lineNumber: {
        activeForeground: SolarizedColorEnum.Base00,
        foreground: `${SolarizedColorEnum.Base00}80`
      },
      indentGuide: {
        activeBackground: SolarizedColorEnum.Base1,
        background: `${SolarizedColorEnum.Base1}20`
      },
      wordHighlight: { background: SolarizedColorEnum.Base01 }
    }
  };
}
