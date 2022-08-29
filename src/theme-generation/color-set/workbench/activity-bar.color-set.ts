import * as Color from 'color';
import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#activity-bar
 */
export class ActivityBarColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'activityBar.background': this.colorPalette.defaultBackground,
      'activityBar.border': this.colorPalette.border,
      'activityBar.foreground':
        this.colorPalette.workbench.activityBar.foreground,
      'activityBarBadge.foreground': SolarizedColor.Base3.color,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return { 'activityBarBadge.background': this.colorPalette.accent };
  }
}
