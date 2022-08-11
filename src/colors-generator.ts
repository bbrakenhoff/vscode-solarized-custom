import { SolarizedColor } from "./solarized-color";
import { ThemeVariant } from "./theme-variant";

export abstract class ColorsGenerator {
  constructor(protected readonly themeVariant: ThemeVariant) {}

  protected get isGeneratingLightTheme(): boolean {
    return this.themeVariant === ThemeVariant.Light;
  }

  protected get accentColor(): SolarizedColor {
    return this.isGeneratingLightTheme
      ? SolarizedColor.Magenta
      : SolarizedColor.Yellow;
  }

  protected get borderColor() {
    return this.isGeneratingLightTheme ? "#ddd6c1" : "#003847";
  }

  abstract generate(): Object;
}
