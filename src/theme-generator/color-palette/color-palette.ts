import { SolarizedColor } from '../../solarized-color';

export abstract class ColorPalette {
  readonly accent: string;

  constructor({ hexCode }: SolarizedColor) {
    this.accent = hexCode;
  }

  abstract readonly border: string;

  abstract readonly defaultBackground: string;
  abstract readonly defaultForeground: string;
  abstract readonly defaultHighlightBackground: string;

  abstract readonly syntax: {
    comments: string;
  };

  abstract readonly workbench: {
    selectionBackground: string;
    input: { foreground: string };
    activityBar: { foreground: string };
    dropdown: { background: string };
    sideBar: { titleForeground: string };
    editorGroup: {
      editorGroup: {
        dropBackground: string;
        tabsBackgroundOpacity: number;
      };
      tab: {
        activeForeground: string;
        inactiveBackground: string;
        inactiveForeground: string;
      };
    };
    list: { focusBackground: string };
    statusBar: {
      background: string;
      debuggingBackground: string;
      foreground: string;
      noFolderBackground: string;
    };
    peekView: {
      editor: { background: string };
      result: {
        background: string;
        lineForeground: string;
      };
      title: { background: string };
    };
    editor: {
      lineNumber: {
        activeForeground: string;
        foreground: string;
      };
      brackets: {
        matchBackground: string;
        matchBorder: string;
      };
      indentGuide: {
        activeBackground: string;
        background: string;
      };
      wordHighlight: { background: string };
    };
  };
}
