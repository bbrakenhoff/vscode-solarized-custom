import { ColorSet } from '../color-set';

export class InputColorSet extends ColorSet {
  propertiesAll() {
    return {
      'input.background': this.colorPalette.border,
      'input.foreground': this.colorPalette.workbench.input.foreground,
      'input.placeholderForeground':
        this.colorPalette.workbench.input.foreground.alpha(0.65),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'inputOption.activeBorder': this.colorPalette.accent.alpha(0.5)
    };
  }
}
