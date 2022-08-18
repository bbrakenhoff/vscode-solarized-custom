import { ColorSet } from '../color-set';

export class StatusBarColorSet extends ColorSet {
  propertiesAll() {
    return {
      'statusBar.background': this.colorPalette.workbench.statusBar.background.hexa(),
      'statusBar.debuggingBackground':
        this.colorPalette.workbench.statusBar.debuggingBackground.hexa(),
      'statusBar.foreground': this.colorPalette.workbench.statusBar.foreground.hexa(),
      'statusBar.noFolderBackground':
        this.colorPalette.workbench.statusBar.noFolderBackground.hexa(),
      'statusBarItem.prominentBackground': this.colorPalette.border.hexa(),
      'statusBarItem.prominentHoverBackground': this.colorPalette.border.hexa(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'statusBarItem.remoteBackground': this.colorPalette.accent
        .alpha(0.5)
        .hexa()
    };
  }
}
