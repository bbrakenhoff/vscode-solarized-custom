import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class ActivityBarColorSet extends ColorSet {
  generate() {
    return {
      'activityBar.background': this.colorPalette.defaultBackground,
      'activityBar.border': this.colorPalette.border,
      'activityBar.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base03
        : '#fffcf5',
      'activityBarBadge.background': this.colorPalette.accentColor,
      'activityBarBadge.foreground': '#fffcf5'
    };
  }
}
