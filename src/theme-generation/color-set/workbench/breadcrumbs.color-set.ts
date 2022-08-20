import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#breadcrumbs-colors
 */
export class BreadcrumbColorSet extends ColorSet {
  propertiesAll() {
    return {
      'breadcrumb.background': this.colorPalette.defaultBackground,
      'breadcrumbPicker.background': this.colorPalette.defaultBackground
    };
  }
}
