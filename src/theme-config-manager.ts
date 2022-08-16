import * as vscode from 'vscode';

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

  static getCurrentAccentColor() {
    return vscode.workspace
      .getConfiguration()
      .get(ThemeConfigManager.CONFIG_IDENTIFIER_ACCENT_COLOR);
  }

  static async updateAccentColor(accentColor: string) {
    return await ThemeConfigManager.update(
      ThemeConfigManager.CONFIG_IDENTIFIER_ACCENT_COLOR,
      accentColor
    );
  }
}
