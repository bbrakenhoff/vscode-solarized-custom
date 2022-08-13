import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class BreadcrumbsColorSet extends ColorSet {
  generate() {
    return {
      'breadcrumb.background': this.colorPalette.defaultBackground,
      'breadcrumbPicker.background': this.colorPalette.defaultBackground
    };
  }
}
