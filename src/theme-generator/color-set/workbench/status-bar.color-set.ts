import { ColorSet } from '../color-set';

export class StatusBarColorSet extends ColorSet {
  propertiesAll() {
    return {
      'statusBar.background': this.colorPalette.workbench.statusBar.background,
      'statusBar.debuggingBackground':
        this.colorPalette.workbench.statusBar.debuggingBackground,
      'statusBar.foreground': this.colorPalette.workbench.statusBar.foreground,
      'statusBar.noFolderBackground':
        this.colorPalette.workbench.statusBar.noFolderBackground,
      'statusBarItem.prominentBackground': this.colorPalette.border,
      'statusBarItem.prominentHoverBackground': this.colorPalette.border,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'statusBarItem.remoteBackground': `${this.colorPalette.accent}99`
    };
  }
}
