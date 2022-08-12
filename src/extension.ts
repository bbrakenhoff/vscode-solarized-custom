import * as vscode from 'vscode';
import { AccentColorCommand } from './accent-color-manager/accent-color-command';

export async function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(AccentColorCommand.register());
}
