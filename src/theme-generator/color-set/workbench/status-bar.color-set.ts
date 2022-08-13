import { ColorSet } from '../color-set';

export class StatusBarColorSet extends ColorSet {
  get() {
    return {
      'statusBar.background': this.colorPalette.workbench.statusBar.background,
      'statusBar.debuggingBackground':
        this.colorPalette.workbench.statusBar.debuggingBackground,
      'statusBar.foreground': this.colorPalette.workbench.statusBar.foreground,
      'statusBar.noFolderBackground':
        this.colorPalette.workbench.statusBar.noFolderBackground,
      'statusBarItem.prominentBackground': this.colorPalette.border,
      'statusBarItem.prominentHoverBackground': this.colorPalette.border,
      'statusBarItem.remoteBackground': `${this.colorPalette.accentColor}99`
    };
  }
}
