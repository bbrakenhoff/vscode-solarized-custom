import * as vscode from 'vscode';
import { SolarizedCustomThemeConfig } from './solarized-custom-theme-config';
import { SolarizedColor } from '../solarized-color';
export class AccentColorCommand {
  private static readonly IDENTIFIER = 'solarizedCustomTheme.setAccentColor';

  private config: SolarizedCustomThemeConfig;

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
    accentColorCommand.readSolarizedCustomThemeConfig();

    const chosenAccentColor = await accentColorCommand.quickPick();

    vscode.window.showInformationMessage(
      'onSetAccentColorCommandTriggered ' + chosenAccentColor
    );
  }

  private async quickPick() {
    return vscode.window.showQuickPick(
      this.getSolarizedColorKeysWithoutBaseColors()
    );
  }

  private getSolarizedColorKeysWithoutBaseColors() {
    return Object.keys(SolarizedColor).filter((key: string) =>
      key.includes('Base')
    );
  }

  private readSolarizedCustomThemeConfig() {
    const rawConfig = vscode.workspace.getConfiguration(
      'solarizedCustomTheme'
    ) as unknown;
    this.config = rawConfig as SolarizedCustomThemeConfig;
  }
}
