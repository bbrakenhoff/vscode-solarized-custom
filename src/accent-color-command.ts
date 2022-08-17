import * as vscode from 'vscode';
import { AccentColorCustomizer } from './accent-color-customizer';
import { SolarizedColor } from './solarized-color';
import { ThemeConfigManager } from './theme-config-manager';

export class AccentColorCommand {
  static readonly IDENTIFIER = 'solarizedCustomTheme.setAccentColor';
  private static readonly CONFIG_IDENTIFIER =
    'solarizedCustomTheme.accentColor';

  static async execute() {
    if (AccentColorCommand.isSolarizedCustomActivated()) {
      return await AccentColorCommand.selectAndUpdateAccentColor();
    }

    await vscode.window.showWarningMessage(
      'Solarized Custom is not the selected theme. Changes could not be applied.'
    );
    return false;
  }

  private static isSolarizedCustomActivated(): boolean {
    const activatedTheme = ThemeConfigManager.getCurrentColorTheme();
    return activatedTheme.startsWith('Solarized Custom');
  }
  private static async selectAndUpdateAccentColor() {
    const selectedAccentColorName =
      await AccentColorCommand.quickPickAccentColor();
    const selectedAccentColor = this.getSolarizedColorByName(
      selectedAccentColorName
    );
    await ThemeConfigManager.updateAccentColor(selectedAccentColor);
    const customizer = new AccentColorCustomizer(selectedAccentColor);
    return await customizer.customizeAccentColor();
  }

  private static async quickPickAccentColor() {
    return vscode.window.showQuickPick(
      this.getSolarizedColorNamesWithoutBaseColors()
    );
  }

  private static getSolarizedColorNamesWithoutBaseColors(): string[] {
    return SolarizedColor.values()
      .filter(
        (solarizedColor: SolarizedColor) =>
          !solarizedColor.name.includes('Base')
      )
      .map((solarizedColor) => solarizedColor.name);
  }

  private static getSolarizedColorByName(name: string): SolarizedColor {
    return SolarizedColor.values().find(
      (solarizedColor) => solarizedColor.name === name
    );
  }
}
