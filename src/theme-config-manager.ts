import * as vscode from 'vscode';
import { SolarizedColor } from './solarized-color';

export class ThemeConfigManager {
  private static readonly CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS =
    'workbench.colorCustomizations';
  private static readonly CONFIG_IDENTIFIER_ACCENT_COLOR =
    'solarizedCustomTheme.accentColor';
  private static readonly CONFIG_IDENTIFIER_COLOR_THEME =
    'workbench.colorTheme';

  static getCurrentColorTheme(): string | undefined {
    return vscode.workspace
      .getConfiguration()
      .get<string>(ThemeConfigManager.CONFIG_IDENTIFIER_COLOR_THEME);
  }

  static isSolarizedCustomActivated(): boolean {
    const currentColorTheme: string | undefined =
      ThemeConfigManager.getCurrentColorTheme();
    return (
      !!currentColorTheme && currentColorTheme.startsWith('Solarized Custom')
    );
  }

  static getCurrentColorCustomizations(): unknown {
    return vscode.workspace
      .getConfiguration()
      .get(ThemeConfigManager.CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS);
  }

  static async updateColorCustomizations(config: unknown) {
    return ThemeConfigManager.update(
      ThemeConfigManager.CONFIG_IDENTIFIER_COLOR_CUSTOMIZATIONS,
      config
    );
  }

  private static async update(identifier: string, config: unknown) {
    try {
      await vscode.workspace
        .getConfiguration()
        .update(identifier, config, true);
      return true;
    } catch (error) {
      await vscode.window.showErrorMessage(`${error}`);
      return false;
    }
  }

  static getCurrentAccentColor(): SolarizedColor {
    const nameCurrentAccentColor: string | undefined = vscode.workspace
      .getConfiguration()
      .get(ThemeConfigManager.CONFIG_IDENTIFIER_ACCENT_COLOR);

    return (
      SolarizedColor.findByName(nameCurrentAccentColor) ||
      SolarizedColor.Magenta
    );
  }

  static async updateAccentColor({ name }: SolarizedColor) {
    return await ThemeConfigManager.update(
      ThemeConfigManager.CONFIG_IDENTIFIER_ACCENT_COLOR,
      name
    );
  }
}
