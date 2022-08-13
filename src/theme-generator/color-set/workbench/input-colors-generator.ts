import { ColorSet } from '../color-set';

export class InputColorSet extends ColorSet {
  get() {
    return {
      'input.background': this.colorPalette.border,
      'input.foreground': this.colorPalette.workbench.input.foreground,
      'input.placeholderForeground': `${this.colorPalette.workbench.input.foreground}aa`,
      'inputOption.activeBorder': `${this.colorPalette.accentColor}70`
    };
  }
}
