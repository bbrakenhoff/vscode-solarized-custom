import * as vscode from 'vscode';
import { AccentColorCustomizer } from './accent-color-customizer';
import { DebugLogChannel } from './debug-log-channel';
import { ThemeConfigManager } from './theme-config-manager';

export class ThemeConfigChangeListener {
  static onConfigChanged(event: vscode.ConfigurationChangeEvent) {
    if (event.affectsConfiguration('solarizedCustomTheme')) {
      if (ThemeConfigManager.isSolarizedCustomActivated()) {
        const customizer = new AccentColorCustomizer(
          ThemeConfigManager.getCurrentAccentColor()
        );
        return customizer.customizeAccentColor();
      } else {
        // TODO: move to separate class
        return vscode.window.showWarningMessage(
          'Solarized Custom is not the selected theme. Changes could not be applied.'
        );
        return false;
      }
    } else {
      DebugLogChannel.log(
        `config-change-listener.ts[ln:23] >>> thema niet aangepast`
      );
      return false;
    }
  }
}
