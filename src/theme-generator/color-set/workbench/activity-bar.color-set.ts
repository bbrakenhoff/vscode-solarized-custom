import { ColorSet } from '../color-set';

export class ActivityBarColorSet extends ColorSet {
  propertiesAll() {
    return {
      'activityBar.background': this.colorPalette.defaultBackground,
      'activityBar.border': this.colorPalette.border,
      'activityBar.foreground':
        this.colorPalette.workbench.activityBar.foreground,
      'activityBarBadge.foreground': '#fffcf5',
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return { 'activityBarBadge.background': this.colorPalette.accent };
  }
}
