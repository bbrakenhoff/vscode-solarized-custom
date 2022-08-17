import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class LightThemeColorPalette extends ColorPalette {
  border = SolarizedColor.Base2.color.darken(0.05).hex();
  // border = '#ddd6c1';
  defaultBackground = SolarizedColor.Base3.color.hex();
  defaultForeground = SolarizedColor.Base00.color.hex();
  defaultHighlightBackground = SolarizedColor.Base2.color.hex();
  syntax = {
    comments: SolarizedColor.Base1.color.hex()
  };
  workbench = {
    selectionBackground: '#ccc4b0',
    input: { foreground: SolarizedColor.Base01.color },
    activityBar: { foreground: SolarizedColor.Base03.color.hexa() },
    dropdown: { background: SolarizedColor.Base2.color.hexa() },
    sideBar: { titleForeground: SolarizedColor.Base01.color.hexa() },
    editorGroup: {
      editorGroup: {
        dropBackground: '#ddd6c1aa',
        tabsBackgroundOpacity: 50
      },
      tab: {
        activeForeground: SolarizedColor.Base01.color.hexa(),
        inactiveBackground: '#d3cbb790',
        inactiveForeground: SolarizedColor.Base01.color.hex()
      }
    },
    list: { focusBackground: '#D1CBB895' },
    statusBar: {
      background: SolarizedColor.Base2.color.hexa(),
      debuggingBackground: SolarizedColor.Base2.color.hexa(),
      foreground: SolarizedColor.Base01.color.hexa(),
      noFolderBackground: SolarizedColor.Base2.color.hex()
    },
    peekView: {
      editor: { background: '#ddd6c150' },
      result: {
        background: '#d3cbb790',
        lineForeground: `${SolarizedColor.Base00.color.hex()}80`
      },
      title: { background: '#d3cbb790' }
    },
    editor: {
      brackets: {
        matchBackground: `${SolarizedColor.Base1.color.hex()}50`,
        matchBorder: '#ccc4b0'
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base1.color.hexa(),
        foreground: `${SolarizedColor.Base1.color.hex()}50`
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base01.color.hexa(),
        background: `${SolarizedColor.Base1.color.hex()}50`
      },
      wordHighlight: { background: SolarizedColor.Base1.color }
    }
  };
}
