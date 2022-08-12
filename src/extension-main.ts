import * as vscode from 'vscode';
import { AccentColorCommand } from './accent-color-manager/accent-color-command';

export async function activate(context: vscode.ExtensionContext) {
  // Register and subscribe accent color command
  context.subscriptions.push(vscode.commands.registerCommand(
    AccentColorCommand.IDENTIFIER,
    AccentColorCommand.execute
  ));
}
