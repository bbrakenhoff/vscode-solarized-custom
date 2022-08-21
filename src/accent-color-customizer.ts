import { SolarizedColor } from './solarized-color';
import { ThemeConfigManager } from './theme-config-manager';
import { ThemeGeneratorFactory } from './theme-generation/theme-generator-factory';
import { ThemeVariant } from './theme-generation/theme-variant';

export class AccentColorCustomizer {
  private readonly activatedTheme: string;

  constructor(private readonly accentColor: SolarizedColor) {
    this.activatedTheme = ThemeConfigManager.getCurrentColorTheme();
  }

  async customizeAccentColor() {
    if (this.accentColorEqualsDefaultColor()) {
      return await this.deleteSolarizedCustomThemeConfig();
    } else {
      return await ThemeConfigManager.updateColorCustomizations(
        this.createColorCustomizationsForScopedTheme()
      );
    }
  }

  private accentColorEqualsDefaultColor() {
    return this.accentColor.name === SolarizedColor.Magenta.name;
  }

  private async deleteSolarizedCustomThemeConfig() {
    const {
      // solarizedCustomConfig is the config to be deleted
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      [this.getThemeScopeIdentifier()]: solarizedCustomConfig,
      ...cleanedConfig
    } = ThemeConfigManager.getCurrentColorCustomizations();

    return await ThemeConfigManager.updateColorCustomizations(cleanedConfig);
  }

  private getThemeScopeIdentifier(): string {
    return `[${this.activatedTheme}]`;
  }

  private createColorCustomizationsForScopedTheme() {
    return {
      ...ThemeConfigManager.getCurrentColorCustomizations(),
      [this.getThemeScopeIdentifier()]:
        this.createThemeColorSetForAccentColors()
    };
  }

  private getThemeVariantActivatedTheme() {
    return this.activatedTheme.includes('Light')
      ? ThemeVariant.Light
      : ThemeVariant.Dark;
  }

  private createThemeColorSetForAccentColors() {
    const themeVariant = this.getThemeVariantActivatedTheme();
    return new ThemeGeneratorFactory(themeVariant, this.accentColor)
      .createThemeGenerator()
      .generateAccentColorCustomizations();
  }
}
