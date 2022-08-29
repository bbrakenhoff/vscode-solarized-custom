import * as Color from 'color';
import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#badge
 */
export class BadgeColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'badge.foreground': SolarizedColor.Base3.color,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return {
      'badge.background': this.colorPalette.accent
    };
  }
}
