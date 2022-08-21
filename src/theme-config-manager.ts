import * as vscode from 'vscode';
import { SolarizedColor } from './solarized-color';

export class ThemeConfigManager {
  private static readonly CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS =
    'workbench.colorCustomizations';
  private static readonly CONFIG_IDENTIFIER_ACCENT_COLOR =
    'solarizedCustomTheme.accentColor';
  private static readonly CONFIG_IDENTIFIER_COLOR_THEME =
    'workbench.colorTheme';

  static getCurrentColorTheme() {
    return vscode.workspace
      .getConfiguration()
      .get<string>(ThemeConfigManager.CONFIG_IDENTIFIER_COLOR_THEME);
  }

  static isSolarizedCustomActivated(): boolean {
    return ThemeConfigManager.getCurrentColorTheme().startsWith(
      'Solarized Custom'
    );
  }

  static getCurrentColorCustomizations(): any {
    return vscode.workspace
      .getConfiguration()
      .get(ThemeConfigManager.CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS);
  }

  static async updateColorCustomizations(config: any) {
    return ThemeConfigManager.update(
      ThemeConfigManager.CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS,
      config
    );
  }

  private static async update(identifier: string, config: any) {
    try {
      await vscode.workspace
        .getConfiguration()
        .update(identifier, config, true);
      return true;
    } catch (error) {
      await vscode.window.showErrorMessage(error);
      return false;
    }
  }

  static getCurrentAccentColor(): SolarizedColor {
    const nameCurrentAccentColor = vscode.workspace
      .getConfiguration()
      .get(ThemeConfigManager.CONFIG_IDENTIFIER_ACCENT_COLOR);

    return SolarizedColor.values().find((solarizedColor) => {
      return solarizedColor.name === nameCurrentAccentColor;
    });
  }

  static async updateAccentColor({ name }: SolarizedColor) {
    return await ThemeConfigManager.update(
      ThemeConfigManager.CONFIG_IDENTIFIER_ACCENT_COLOR,
      name
    );
  }
}
