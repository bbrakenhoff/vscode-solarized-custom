import { ColorSet } from '../color-set';

export class ActivityBarColorSet extends ColorSet {
  get() {
    return {
      'activityBar.background': this.colorPalette.defaultBackground,
      'activityBar.border': this.colorPalette.border,
      'activityBar.foreground':
        this.colorPalette.workbench.activityBar.foreground,
      'activityBarBadge.background': this.colorPalette.accent,
      'activityBarBadge.foreground': '#fffcf5'
    };
  }
}
