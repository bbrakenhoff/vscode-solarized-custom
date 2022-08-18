import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class ActivityBarColorSet extends ColorSet {
  propertiesAll() {
    return {
      'activityBar.background': this.colorPalette.defaultBackground,
      'activityBar.border': this.colorPalette.border.hexa(),
      'activityBar.foreground':
        this.colorPalette.workbench.activityBar.foreground,
      'activityBarBadge.foreground': SolarizedColor.Base3.color
        .hexa(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return { 'activityBarBadge.background': this.colorPalette.accent.hexa() };
  }
}
