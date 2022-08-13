import { ColorSet } from '../color-set';

export class DropdownColorSet extends ColorSet {
  get() {
    return {
      'dropdown.background': this.colorPalette.workbench.dropdown.background,
      'dropdown.border': `${this.colorPalette.accent}80`
    };
  }
}
