import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class LightThemeColorPalette extends ColorPalette {
  border = SolarizedColor.Base2.color.darken(0.05);
  defaultBackground = SolarizedColor.Base3.color;
  defaultForeground = SolarizedColor.Base00.color;
  defaultHighlightBackground = SolarizedColor.Base2.color;
  syntax = {
    comments: SolarizedColor.Base1.color
  };
  workbench = {
    activityBar: { foreground: SolarizedColor.Base03.color },
    base: {
      selectionBackground: SolarizedColor.Base3.color
        .darken(0.2)
        .desaturate(0.5)
    },
    dropdown: { background: SolarizedColor.Base2.color },
    editor: {
      brackets: {
        matchBackground: SolarizedColor.Base1.color.alpha(0.3),
        matchBorder: SolarizedColor.Base3.color.darken(0.2).desaturate(0.5)
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base1.color,
        foreground: SolarizedColor.Base1.color.alpha(0.3)
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base01.color,
        background: SolarizedColor.Base1.color.alpha(0.3)
      },

      wordHighlight: { background: SolarizedColor.Base1.color }
    },
    editorGroupAndTabs: {
      editorGroup: {
        dropBackground: SolarizedColor.Base3.color
          .darken(0.3)
          .desaturate(0.8)
          .alpha(0.5),
        tabsBackground: this.border.alpha(0.3)
      },
      tab: {
        activeForeground: SolarizedColor.Base01.color,
        inactiveBackground: SolarizedColor.Base2.color
          .darken(0.1)
          .desaturate(0.2),
        inactiveForeground: SolarizedColor.Base01.color
      }
    },
    editorWidget: {
      background: SolarizedColor.Base2.color,
      border: this.border
    },
    inputControl: { foreground: SolarizedColor.Base01.color },
    list: {
      focusBackground: SolarizedColor.Base2.color.darken(0.1).alpha(0.5)
    },
    peekView: {
      editor: {
        background: SolarizedColor.Base2.color
          .darken(0.02)
          .desaturate(0.1)
          .alpha(0.3)
      },
      result: {
        background: SolarizedColor.Base2.color
          .darken(0.1)
          .desaturate(0.3)
          .alpha(0.3),
        lineForeground: SolarizedColor.Base00.color.alpha(0.5)
      },
      title: {
        background: SolarizedColor.Base2.color.darken(0.1).desaturate(0.2)
      }
    },
    sideBar: { titleForeground: SolarizedColor.Base01.color },
    statusBar: {
      background: SolarizedColor.Base2.color,
      debuggingBackground: SolarizedColor.Base2.color,
      foreground: SolarizedColor.Base01.color,
      noFolderBackground: SolarizedColor.Base2.color
    },
  };
}
