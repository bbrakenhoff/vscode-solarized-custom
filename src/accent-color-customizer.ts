import * as vscode from 'vscode';
import { SolarizedColor } from './solarized-color';
import { ColorPaletteFactory } from './theme-generator/color-palette/color-palette-factory';
import { ThemeVariant } from './theme-generator/theme-variant';
import { ThemeColorSet } from './theme-generator/theme.color-set';

export class AccentColorCustomizer {
  private static readonly CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS =
    'workbench.colorCustomizations';
  private activatedTheme: string;

  constructor(private readonly accentColor: string) {
    this.activatedTheme = vscode.workspace
      .getConfiguration()
      .get<string>('workbench.colorTheme');
  }

  async customizeAccentColor() {
    if (this.accentColorEqualsDefaultColor()) {
      return await this.deleteSolarizedCustomThemeConfig();
    } else {
      return await this.updateColorCustomizationsConifg(
        this.createColorCustomizationsForScopedTheme()
      );
    }
  }

  private accentColorEqualsDefaultColor() {
    return this.accentColor === SolarizedColor.Magenta;
  }

  private async deleteSolarizedCustomThemeConfig() {
    const currentColorCustomizations = this.getCurrentColorCustomizations();
    const {
      // solarizedCustomConfig is the config to be deleted
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      [this.getThemeScopeIdentifier()]: solarizedCustomConfig,
      ...cleanedConfig
    } = currentColorCustomizations;

    return await this.updateColorCustomizationsConifg(cleanedConfig);
  }

  private getCurrentColorCustomizations(): any {
    return vscode.workspace
      .getConfiguration()
      .get(AccentColorCustomizer.CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS);
  }

  private getThemeScopeIdentifier() {
    return `[${this.activatedTheme}]`;
  }

  private async updateColorCustomizationsConifg(config: any) {
    try {
      await vscode.workspace
        .getConfiguration()
        .update(
          AccentColorCustomizer.CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS,
          config,
          true
        );
      return true;
    } catch (error) {
      await vscode.window.showErrorMessage(error);
      return false;
    }
  }

  private createColorCustomizationsForScopedTheme() {
    return {
      ...this.getCurrentColorCustomizations(),
      [this.getThemeScopeIdentifier()]:
        this.createThemeColorSetForAccentColors().propertiesUsingAccentColor()
    };
  }

  private getThemeVariantActivatedTheme() {
    return this.activatedTheme.includes('Light')
      ? ThemeVariant.Light
      : ThemeVariant.Dark;
  }

  private createThemeColorSetForAccentColors() {
    const themeVariant = this.getThemeVariantActivatedTheme();
    return new ThemeColorSet(
      themeVariant,
      ColorPaletteFactory.createColorPaletteForThemeVariant(
        themeVariant,
        this.accentColor
      )
    );
  }
}
