import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class ActivityBarColorSet extends ColorSet {
  propertiesAll() {
    return {
      'activityBar.background': this.colorPalette.defaultBackground.hexa(),
      'activityBar.border': this.colorPalette.border.hexa(),
      'activityBar.foreground':
        this.colorPalette.workbench.activityBar.foreground.hexa(),
      'activityBarBadge.foreground': SolarizedColor.Base3.color
        .hexa(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return { 'activityBarBadge.background': this.colorPalette.accent.hexa() };
  }
}
