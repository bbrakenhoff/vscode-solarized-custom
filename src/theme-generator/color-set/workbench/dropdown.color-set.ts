import { ColorSet } from '../color-set';

export class DropdownColorSet extends ColorSet {
  get() {
    return {
      'dropdown.background': this.colorPalette.workbench.dropdown,
      'dropdown.border': `${this.colorPalette.accentColor}80`
    };
  }
}
