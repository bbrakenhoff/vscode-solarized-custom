import * as vscode from 'vscode';
export class DebugLogChannel {
  private static readonly CHANNEL_NAME = 'bijoya.solarizedCustomTheme';
  private static instance: vscode.OutputChannel;

  static create() {
    if (!DebugLogChannel.instance) {
      DebugLogChannel.instance = vscode.window.createOutputChannel(
        DebugLogChannel.CHANNEL_NAME
      );
      this.instance.show();
    }
  }

  static destroy() {
    DebugLogChannel.instance.dispose();
    DebugLogChannel.instance = undefined;
  }

  static log(message: string) {
    DebugLogChannel.instance.appendLine(message);
  }
}
