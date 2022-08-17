import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class LightThemeColorPalette extends ColorPalette {
  border = SolarizedColor.Base2.color.darken(0.05).hexa();
  // border = '#ddd6c1';
  defaultBackground = SolarizedColor.Base3.color.hexa();
  defaultForeground = SolarizedColor.Base00.color.hexa();
  defaultHighlightBackground = SolarizedColor.Base2.color.hexa();
  syntax = {
    comments: SolarizedColor.Base1.color.hexa()
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
        inactiveForeground: SolarizedColor.Base01.color.hexa()
      }
    },
    list: { focusBackground: '#D1CBB895' },
    statusBar: {
      background: SolarizedColor.Base2.color.hexa(),
      debuggingBackground: SolarizedColor.Base2.color.hexa(),
      foreground: SolarizedColor.Base01.color.hexa(),
      noFolderBackground: SolarizedColor.Base2.color.hexa()
    },
    peekView: {
      editor: { background: '#ddd6c150' },
      result: {
        background: '#d3cbb790',
        lineForeground: SolarizedColor.Base00.color.alpha(0.5).hexa()
      },
      title: { background: '#d3cbb790' }
    },
    editor: {
      brackets: {
        matchBackground: SolarizedColor.Base1.color.alpha(0.3).hexa(),
        matchBorder: '#ccc4b0'
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base1.color.hexa(),
        foreground: SolarizedColor.Base1.color.alpha(0.3).hexa()
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base01.color.hexa(),
        background: SolarizedColor.Base1.color.alpha(0.3).hexa()
      },
      wordHighlight: { background: SolarizedColor.Base1.color }
    }
  };
}
