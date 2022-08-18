import { ColorSet } from '../color-set';

export class BreadcrumbsColorSet extends ColorSet {
  propertiesAll() {
    return {
      'breadcrumb.background': this.colorPalette.defaultBackground.hexa(),
      'breadcrumbPicker.background': this.colorPalette.defaultBackground.hexa()
    };
  }
}
