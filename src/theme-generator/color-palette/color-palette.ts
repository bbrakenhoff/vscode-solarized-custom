import { SolarizedColor } from '../../solarized-color';

export abstract class ColorPalette {
  constructor(readonly accentColor: SolarizedColor) {}

  abstract borderColor:string;
}
