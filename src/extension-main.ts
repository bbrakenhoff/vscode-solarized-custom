import * as vscode from 'vscode';
import { AccentColorCommand } from './accent-color-command';
import { ThemeConfigChangeListener } from './theme-config-change-listener';

export async function activate(context: vscode.ExtensionContext) {
  // Register and subscribe solarizedCustomTheme.setAccentColor command
  context.subscriptions.push(
    vscode.commands.registerCommand(
      AccentColorCommand.IDENTIFIER,
      AccentColorCommand.execute
    )
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(
      async (event) => await ThemeConfigChangeListener.onConfigChanged(event)
    )
  );
}
