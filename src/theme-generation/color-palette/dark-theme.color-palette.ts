import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class DarkThemeColorPalette extends ColorPalette {
  border = SolarizedColor.Base03.color.lighten(0.35);
  defaultBackground = SolarizedColor.Base03.color;
  defaultForeground = SolarizedColor.Base0.color;
  defaultHighlightBackground = SolarizedColor.Base02.color;
  syntax = {
    comments: SolarizedColor.Base01.color
  };

  workbench = {
    selectionBackground: SolarizedColor.Cyan.color.alpha(0.5),
    input: { foreground: SolarizedColor.Base1.color },
    activityBar: { foreground: SolarizedColor.Base3.color.lighten(0.05) },
    dropdown: { background: SolarizedColor.Base03.color.darken(0.5) },
    sideBar: { titleForeground: SolarizedColor.Base1.color },
    editorGroup: {
      editorGroup: {
        dropBackground: SolarizedColor.Cyan.color.alpha(0.25),
        tabsBackground: this.border.alpha(0.5)
      },
      tab: {
        activeForeground: SolarizedColor.Base1.color,
        inactiveBackground: SolarizedColor.Base00.color.alpha(0.2),
        inactiveForeground: SolarizedColor.Base1.color
      }
    },
    list: { focusBackground: SolarizedColor.Base02.color.lighten(0.05) },
    statusBar: {
      background: SolarizedColor.Base03.color.darken(0.3),
      debuggingBackground: SolarizedColor.Base03.color.darken(0.3),
      foreground: SolarizedColor.Base1.color,
      noFolderBackground: SolarizedColor.Base03.color.darken(0.3)
    },
    peekView: {
      editor: { background: SolarizedColor.Base02.color.lighten(0.05) },
      result: {
        background: SolarizedColor.Base02.color.darken(0.1),
        lineForeground: SolarizedColor.Base1.color.alpha(0.3)
      },
      title: { background: SolarizedColor.Base02.color.darken(0.1) }
    },
    editor: {
      brackets: {
        matchBackground: SolarizedColor.Base03.color.darken(0.3),
        matchBorder: SolarizedColor.Base01.color.alpha(0.5)
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base00.color,
        foreground: SolarizedColor.Base00.color.alpha(0.5)
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base1.color,
        background: SolarizedColor.Base1.color.alpha(0.15)
      },
      wordHighlight: { background: SolarizedColor.Base01.color }
    }
  };
}
