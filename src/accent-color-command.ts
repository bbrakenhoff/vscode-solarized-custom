import * as vscode from 'vscode';
import { AccentColorCustomizer } from './accent-color-customizer';
import { DebugLogChannel } from './log-channel';
import { SolarizedColor } from './solarized-color';
export class AccentColorCommand {
  static readonly IDENTIFIER = 'solarizedCustomTheme.setAccentColor';
  private static readonly CONFIG_IDENTIFIER =
    'solarizedCustomTheme.accentColor';

  static async execute() {
    DebugLogChannel.log(`accent-color-command.ts[ln:10] >>> execute()`);
    if (AccentColorCommand.isSolarizedCustomActivated()) {
      DebugLogChannel.log(`accent-color-command.ts[ln:13] >>> theme activated`);
      return await AccentColorCommand.selectAndUpdateAccentColor();
    }

    await vscode.window.showWarningMessage(
      'Solarized Custom is not the selected theme. Changes could not be applied'
    );
    return false;
  }

  private static isSolarizedCustomActivated(): boolean {
    const activatedTheme = vscode.workspace
      .getConfiguration()
      .get<string>('workbench.colorTheme');
    return activatedTheme.startsWith('Solarized Custom');
  }
  private static async selectAndUpdateAccentColor() {
    const selectedAccentColorName =
      await AccentColorCommand.quickPickAccentColor();
    await AccentColorCommand.updateAccentColorInConfig(selectedAccentColorName);
    const customizer = new AccentColorCustomizer(
      SolarizedColor[selectedAccentColorName]
    );
    return await customizer.customizeAccentColor();
  }

  private static async quickPickAccentColor() {
    return vscode.window.showQuickPick(
      this.getSolarizedColorNamesWithoutBaseColors()
    );
  }

  private static getSolarizedColorNamesWithoutBaseColors() {
    return Object.keys(SolarizedColor).filter(
      (key: string) => !key.includes('Base')
    );
  }

  private static async updateAccentColorInConfig(selectedAccentColor: string) {
    try {
      await vscode.workspace
        .getConfiguration()
        .update(
          AccentColorCommand.CONFIG_IDENTIFIER,
          selectedAccentColor,
          true
        );
      return true;
    } catch (error) {
      vscode.window.showErrorMessage(error);
      return false;
    }
  }
}
