import * as vscode from 'vscode';
import { SolarizedColor } from '../solarized-color';
export class AccentColorCommand {
  static readonly IDENTIFIER = 'solarizedCustomTheme.setAccentColor';
  private static readonly CONFIG_KEY='solarizedCustomTheme.accentColor';

  static async execute() {
    const selectedAccentColor = await AccentColorCommand.quickPickAccentColor();
    await AccentColorCommand.updateAccentColorInConfig(selectedAccentColor);
    await AccentColorCommand.showSuccessMessage();
  }

  private static async quickPickAccentColor() {
    return vscode.window.showQuickPick(
      this.getSolarizedColorKeysWithoutBaseColors()
    );
  }

  private static getSolarizedColorKeysWithoutBaseColors() {
    return Object.keys(SolarizedColor).filter(
      (key: string) => !key.includes('Base')
    );
  }

  // private readSolarizedCustomThemeConfig() {
  //   const rawConfig = vscode.workspace.getConfiguration(
  //     'solarizedCustomTheme'
  //   ) as unknown;
  //   this.accentColor = (rawConfig as { accentColor: string }).accentColor;
  // }

  private static async updateAccentColorInConfig(selectedAccentColor: string) {
    try {
      await vscode.workspace
        .getConfiguration()
        .update(AccentColorCommand.CONFIG_KEY, selectedAccentColor, true);
      return true;
    } catch (error) {
      vscode.window.showErrorMessage(error);
      return false;
    }
  }

  private static async showSuccessMessage() {
    await vscode.window.showInformationMessage(
      'onSetAccentColorCommandTriggered'
    );
  }
}
