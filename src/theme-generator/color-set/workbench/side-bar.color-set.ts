import { ColorSet } from '../color-set';

export class SideBarColorSet extends ColorSet {
  get() {
    return {
      'sideBar.background': this.colorPalette.defaultBackground,
      'sideBar.border': this.colorPalette.border,
      'sideBarTitle.foreground':
        this.colorPalette.workbench.sideBar.titleForeground
    };
  }
}
