import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
  // Register set accent color command
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'solarizedCustomTheme.setAccentColor',
      () => {
        vscode.window.showInformationMessage('Hello Bijoya!');
      }
    )
  );
}
