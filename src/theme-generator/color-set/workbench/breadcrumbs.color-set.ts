import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class BreadcrumbsColorSet extends ColorSet {
  generate() {
    return {
      'breadcrumb.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'breadcrumbPicker.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03
    };
  }
}
