import { SolarizedColor } from '../../../solarized-color';
import { ThemeDependentColorSet } from '../theme-dependent-colors-set';

export class ActivityBarColorSet extends ThemeDependentColorSet {
  get() {
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
