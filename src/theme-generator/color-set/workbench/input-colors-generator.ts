import { ColorSet } from '../color-set';

export class InputColorSet extends ColorSet {
  propertiesAll() {
    return {
      'input.background': this.colorPalette.border.hexa(),
      'input.foreground': this.colorPalette.workbench.input.foreground.hexa(),
      'input.placeholderForeground':
        this.colorPalette.workbench.input.foreground.alpha(0.65).hexa(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'inputOption.activeBorder': this.colorPalette.accent.alpha(0.5).hexa()
    };
  }
}
