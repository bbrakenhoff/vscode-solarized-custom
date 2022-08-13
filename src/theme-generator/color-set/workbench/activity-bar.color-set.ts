import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class ActivityBarColorSet extends ColorSet {
  generate() {
    return {
      'activityBar.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'activityBar.border': this.isGeneratingLightTheme ? '#ddd6c1' : '#00212B',
      'activityBar.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base03
        : '#fffcf5',
      'activityBarBadge.background': this.colorPalette.accentColor,
      'activityBarBadge.foreground': '#fffcf5'
    };
  }
}
