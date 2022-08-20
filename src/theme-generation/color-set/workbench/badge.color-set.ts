import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#badge
 */
export class BadgeColorSet extends ColorSet {
  propertiesAll() {
    return {
      'badge.foreground': SolarizedColor.Base3.color,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'badge.background': this.colorPalette.accent 
    };
  }
}
