import { SolarizedColor } from "./solarized-color";

export class ColorReplacer {
  static replaceColorPlaceholders(jsonTheme: string) {
    const names = Object.keys(SolarizedColor);
    names.forEach((name) => {
      jsonTheme.replace(`${name}_`, SolarizedColor[name]);
    });
  }
}
