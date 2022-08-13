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
}
