import * as vscode from 'vscode';
import { SolarizedColor } from '../solarized-color';
export class AccentColorCommand {
  private static readonly IDENTIFIER = 'solarizedCustomTheme.setAccentColor';

  private accentColor: string;

  private constructor() {
    // Do nothing
  }

  static register(): vscode.Disposable {
    return vscode.commands.registerCommand(
      this.IDENTIFIER,
      AccentColorCommand.onCommandSetAccentColor
    );
  }

  private static async onCommandSetAccentColor() {
    const accentColorCommand = new AccentColorCommand();
    accentColorCommand.accentColor =
      await accentColorCommand.quickPickAccentColor();
    await accentColorCommand.updateSolarizedCustomThemeConfig();

    vscode.window.showInformationMessage(
      'onSetAccentColorCommandTriggered ' + accentColorCommand.accentColor
    );
  }

  private async quickPickAccentColor() {
    return vscode.window.showQuickPick(
      this.getSolarizedColorKeysWithoutBaseColors()
    );
  }

  private getSolarizedColorKeysWithoutBaseColors() {
    return Object.keys(SolarizedColor).filter(
      (key: string) => !key.includes('Base')
    );
  }

  private readSolarizedCustomThemeConfig() {
    const rawConfig = vscode.workspace.getConfiguration(
      'solarizedCustomTheme'
    ) as unknown;
    this.accentColor = (rawConfig as { accentColor: string }).accentColor;
  }

  private async updateSolarizedCustomThemeConfig() {
    try {
      await vscode.workspace
        .getConfiguration()
        .update('solarizedCustomTheme.accentColor', this.accentColor, true);
      return true;
    } catch (error) {
      vscode.window.showErrorMessage(error);
    }
  }
}
