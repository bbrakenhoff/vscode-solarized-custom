import * as vscode from 'vscode';
import { AccentColorCustomizer } from './accent-color-customizer';
import { ThemeConfigManager } from './theme-config-manager';
import { Messages } from './theme-generation/messages';

export class ThemeConfigChangeListener {
  static async onConfigChanged(event: vscode.ConfigurationChangeEvent) {
    if (event.affectsConfiguration('solarizedCustomTheme')) {
      if (ThemeConfigManager.isSolarizedCustomActivated()) {
        const customizer = new AccentColorCustomizer(
          ThemeConfigManager.getCurrentAccentColor()
        );
        return customizer.customizeAccentColor();
      } else {
        await vscode.window.showWarningMessage(
          Messages.SOLARIZED_CUSTOM_NOT_ACTIVATED
        );
      }
    }
    
    return false;
  }
}
