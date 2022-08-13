import { ColorSet } from '../color-set';

export class BreadcrumbsColorSet extends ColorSet {
  get() {
    return {
      'breadcrumb.background': this.colorPalette.defaultBackground,
      'breadcrumbPicker.background': this.colorPalette.defaultBackground
    };
  }
}
