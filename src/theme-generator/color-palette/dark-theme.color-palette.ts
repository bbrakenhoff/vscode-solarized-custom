import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class DarkThemeColorPalette extends ColorPalette {
  border = SolarizedColor.Base03.color.lighten(0.35).hex();
  defaultBackground = SolarizedColor.Base03.color.hexa();
  defaultForeground = SolarizedColor.Base0.color.hexa();
  defaultHighlightBackground = SolarizedColor.Base02.color.hexa();
  syntax = {
    comments: SolarizedColor.Base01.color.hexa()
  };

  workbench = {
    selectionBackground: SolarizedColor.Cyan.color.alpha(0.5).hexa(),
    input: { foreground: SolarizedColor.Base1.color },
    activityBar: { foreground: SolarizedColor.Base3.color.lighten(0.05).hexa() },
    dropdown: { background: SolarizedColor.Base03.color.darken(0.5).hexa() },
    sideBar: { titleForeground: SolarizedColor.Base1.color.hexa() },
    editorGroup: {
      editorGroup: {
        dropBackground: SolarizedColor.Cyan.color.alpha(0.25).hexa(),
        tabsBackgroundOpacity: 80
      },
      tab: {
        activeForeground: SolarizedColor.Base1.color.hexa(),
        inactiveBackground:SolarizedColor.Base00.color.alpha(.2).hexa(),
        inactiveForeground: SolarizedColor.Base1.color.hexa()
      }
    },
    list: { focusBackground: '005A6F' },
    statusBar: {
      background: SolarizedColor.Base03.color.darken(0.3).hexa(),
      debuggingBackground: SolarizedColor.Base03.color.darken(0.3).hexa(),
      foreground: SolarizedColor.Base1.color.hexa(),
      noFolderBackground: SolarizedColor.Base03.color.darken(0.3).hexa()
    },
    peekView: {
      editor: { background: SolarizedColor.Base02.color.lighten(.05).hexa() },
      result: {
        background:SolarizedColor.Base02.color.darken(0.1).hexa(),
        lineForeground: SolarizedColor.Base1.color.alpha(0.3).hexa()
      },
      title: { background: SolarizedColor.Base02.color.darken(0.1).hexa() }
    },
    editor: {
      brackets: {
        matchBackground: SolarizedColor.Base03.color.darken(0.3).hexa(),
        matchBorder: SolarizedColor.Base01.color.alpha(0.5).hexa()
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base00.color.hexa(),
        foreground: SolarizedColor.Base00.color.alpha(0.5).hexa()
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base1.color.hexa(),
        background: SolarizedColor.Base1.color.alpha(0.15).hexa()
      },
      wordHighlight: { background: SolarizedColor.Base01.color }
    }
  };
}
