import * as vscode from 'vscode';
import { SolarizedCustomThemeConfig } from './solarized-custom-theme-config';

export class AccentColorCommand {
  private static readonly IDENTIFIER = 'solarizedCustomTheme.setAccentColor';

  private config: SolarizedCustomThemeConfig;

  private constructor() {
    // Do nothing
  }

  static register(): vscode.Disposable {
    return vscode.commands.registerCommand(
      this.IDENTIFIER,
      AccentColorCommand.onSetAccentColorCommandTriggered
    );
  }

  private static onSetAccentColorCommandTriggered() {
    const accentColorCommand = new AccentColorCommand();
    accentColorCommand.readSolarizedCustomThemeConfig();

    vscode.window.showInformationMessage(
      'onSetAccentColorCommandTriggered ' +
        JSON.stringify(accentColorCommand.config)
    );
  }

  private readSolarizedCustomThemeConfig() {
    const rawConfig = vscode.workspace.getConfiguration(
      'solarizedCustomTheme'
    ) as unknown;
    this.config = rawConfig as SolarizedCustomThemeConfig;
  }
}
