import { SolarizedColor } from '../../../solarized-color';
import { ThemeDependentColorSet } from '../theme-dependent-colors-set';

export class BreadcrumbsColorSet extends ThemeDependentColorSet {
  get() {
    return {
      'breadcrumb.background': this.colorPalette.defaultBackground,
      'breadcrumbPicker.background': this.colorPalette.defaultBackground
    };
  }
}
