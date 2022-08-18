import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class LightThemeColorPalette extends ColorPalette {
  // FIXME: use hexa
  border = SolarizedColor.Base2.color.darken(0.05).hex();
  defaultBackground = SolarizedColor.Base3.color.hexa();
  defaultForeground = SolarizedColor.Base00.color.hexa();
  defaultHighlightBackground = SolarizedColor.Base2.color.hexa();
  syntax = {
    comments: SolarizedColor.Base1.color.hexa()
  };
  workbench = {
    selectionBackground: SolarizedColor.Base3.color
      .darken(0.2)
      .desaturate(0.5)
      .hexa(),
    input: { foreground: SolarizedColor.Base01.color },
    activityBar: { foreground: SolarizedColor.Base03.color.hexa() },
    dropdown: { background: SolarizedColor.Base2.color.hexa() },
    sideBar: { titleForeground: SolarizedColor.Base01.color.hexa() },
    editorGroup: {
      editorGroup: {
        dropBackground: SolarizedColor.Base3.color
          .darken(0.3)
          .desaturate(0.8)
          .alpha(0.5)
          .hexa(),
        tabsBackgroundOpacity: 50
      },
      tab: {
        activeForeground: SolarizedColor.Base01.color.hexa(),
        inactiveBackground: SolarizedColor.Base2.color
          .darken(0.1)
          .desaturate(0.2)
          .hexa(),
        inactiveForeground: SolarizedColor.Base01.color.hexa()
      }
    },
    list: {
      focusBackground: SolarizedColor.Base2.color.darken(0.1).alpha(0.5).hexa()
    },
    statusBar: {
      background: SolarizedColor.Base2.color.hexa(),
      debuggingBackground: SolarizedColor.Base2.color.hexa(),
      foreground: SolarizedColor.Base01.color.hexa(),
      noFolderBackground: SolarizedColor.Base2.color.hexa()
    },
    peekView: {
      editor: {
        background: SolarizedColor.Base2.color
          .darken(0.02)
          .desaturate(0.1)
          .alpha(0.3)
          .hexa()
      },
      result: {
        background: SolarizedColor.Base2.color
          .darken(0.1)
          .desaturate(0.3)
          .alpha(.3)
          .hexa(),
        lineForeground: SolarizedColor.Base00.color.alpha(0.5).hexa()
      },
      title: {
        background: SolarizedColor.Base2.color
          .darken(0.1)
          .desaturate(0.2)
          .hexa()
      }
    },
    editor: {
      brackets: {
        matchBackground: SolarizedColor.Base1.color.alpha(0.3).hexa(),
        matchBorder: SolarizedColor.Base3.color
          .darken(0.2)
          .desaturate(0.5)
          .hexa()
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
