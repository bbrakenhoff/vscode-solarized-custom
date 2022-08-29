import * as vscode from 'vscode';
import { AccentColorCustomizer } from './accent-color-customizer';
import { SolarizedColor } from './solarized-color';
import { ThemeConfigManager } from './theme-config-manager';
import { Messages } from './theme-generation/messages';

export class AccentColorCommand {
  static readonly IDENTIFIER = 'solarizedCustomTheme.setAccentColor';

  static async execute() {
    if (ThemeConfigManager.isSolarizedCustomActivated()) {
      return await AccentColorCommand.selectAndUpdateAccentColor();
    } else {
      await vscode.window.showWarningMessage(
        Messages.SOLARIZED_CUSTOM_NOT_ACTIVATED
      );
      return false;
    }
  }

  private static async selectAndUpdateAccentColor() {
    const selectedAccentColorName =
      await AccentColorCommand.quickPickAccentColor();

    if (selectedAccentColorName) {
      return await AccentColorCommand.onAccentColorSelectedInQuickPick(
        selectedAccentColorName
      );
    }

    return false;
  }

  private static async quickPickAccentColor() {
    return vscode.window.showQuickPick(
      this.getSolarizedColorNamesWithoutBaseColors()
    );
  }

  private static async onAccentColorSelectedInQuickPick(
    selectedAccentColorName: string
  ) {
    const selectedAccentColor = SolarizedColor.findByName(selectedAccentColorName);
    await ThemeConfigManager.updateAccentColor(selectedAccentColor);
    const customizer = new AccentColorCustomizer(selectedAccentColor);
    return await customizer.customizeAccentColor();
  }

  private static getSolarizedColorNamesWithoutBaseColors(): string[] {
    return SolarizedColor.values()
      .filter(
        (solarizedColor: SolarizedColor) =>
          !solarizedColor.name.includes('Base')
      )
      .map((solarizedColor) => solarizedColor.name);
  }
}
