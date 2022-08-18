import { ColorSet } from '../color-set';

export class SideBarColorSet extends ColorSet {
  propertiesAll() {
    return {
      'sideBar.background': this.colorPalette.defaultBackground.hexa(),
      'sideBar.border': this.colorPalette.border.hexa(),
      'sideBarTitle.foreground':
        this.colorPalette.workbench.sideBar.titleForeground.hexa()
    };
  }
}
