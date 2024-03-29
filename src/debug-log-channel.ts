import * as vscode from 'vscode';
export class DebugLogChannel {
  private static readonly CHANNEL_NAME = 'debug.solarizedCustomTheme';
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
  }

  static log(message: string) {
    DebugLogChannel.instance.appendLine(message);
  }
}
