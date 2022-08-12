import * as vscode from 'vscode';
import { AccentColorCommand } from './accent-color-command';

export async function activate(context: vscode.ExtensionContext) {
  // Register and subscribe solarizedCustomTheme.setAccentColor command
  context.subscriptions.push(vscode.commands.registerCommand(
    AccentColorCommand.IDENTIFIER,
    AccentColorCommand.execute
  ));
}
