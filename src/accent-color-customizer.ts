import * as vscode from 'vscode';
import { DebugLogChannel } from './debug-log-channel';
import { SolarizedColor } from './solarized-color';

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
      [`[${this.activatedTheme}]`]: solarizedCustomConfig,
      ...cleanedConfig
    } = currentColorCustomizations;

    return await this.updateColorCustomizationsConifg(cleanedConfig);
  }

  private getCurrentColorCustomizations(): any {
    return vscode.workspace
      .getConfiguration()
      .get(AccentColorCustomizer.CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS);
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
      [`[${this.activatedTheme}]`]: {
        'activityBarBadge.background': this.accentColor
      },
      ...this.getCurrentColorCustomizations()
    };
  }
}
