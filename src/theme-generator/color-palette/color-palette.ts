import { SolarizedColor } from '../../solarized-color';

export abstract class ColorPalette {
  constructor(readonly accentColor: SolarizedColor) {}

  abstract readonly border: string;

  abstract readonly defaultBackground: string;
  abstract readonly defaultForeground: string;
  abstract readonly defaultHighlightBackground: string;

  abstract readonly code: {
    comments: string;
  };

  abstract readonly workbench: {
    selectionBackground: string;
    activityBar: { foreground: string };
    dropdown: { background: string };
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
