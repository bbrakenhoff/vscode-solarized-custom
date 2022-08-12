import { SolarizedColor } from '../solarized-color';
import { ThemeVariant } from './theme-variant';

export abstract class ColorsGenerator {
  constructor(
    protected readonly themeVariant: ThemeVariant,
    protected readonly accentColor: SolarizedColor
  ) {}

  protected get isGeneratingLightTheme(): boolean {
    return this.themeVariant === ThemeVariant.Light;
  }

  protected get borderColor() {
    return this.isGeneratingLightTheme ? '#ddd6c1' : '#003847';
  }

  abstract generate(): any;
}
