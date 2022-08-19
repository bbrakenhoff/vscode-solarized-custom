import * as Color from 'color'
import { SolarizedColor } from '../../solarized-color';

export abstract class ColorPalette {
  readonly accent: Color;

  constructor({ color }: SolarizedColor) {
    this.accent = color;
  }

  abstract readonly border: Color;

  abstract readonly defaultBackground: Color;
  abstract readonly defaultForeground: Color;
  abstract readonly defaultHighlightBackground: Color;

  abstract readonly syntax: {
    comments: Color;
  };

  abstract readonly workbench: {
    selectionBackground: Color;
    input: { foreground: Color };
    activityBar: { foreground: Color };
    dropdown: { background: Color };
    sideBar: { titleForeground: Color };
    editorGroup: {
      editorGroup: {
        dropBackground: Color;
        tabsBackground: Color;
      };
      tab: {
        activeForeground: Color;
        inactiveBackground: Color;
        inactiveForeground: Color;
      };
    };
    list: { focusBackground: Color };
    statusBar: {
      background: Color;
      debuggingBackground: Color;
      foreground: Color;
      noFolderBackground: Color;
    };
    peekView: {
      editor: { background: Color };
      result: {
        background: Color;
        lineForeground: Color;
      };
      title: { background: Color };
    };
    editor: {
      lineNumber: {
        activeForeground: Color;
        foreground: Color;
      };
      brackets: {
        matchBackground: Color;
        matchBorder: Color;
      };
      indentGuide: {
        activeBackground: Color;
        background: Color;
      };
      wordHighlight: { background: Color };
    };
  };
}
