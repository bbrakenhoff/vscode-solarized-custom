import { ColorSet } from '../../color-set';

export class WordHighlightColorSet extends ColorSet {
  propertiesAll() {
    return {
      'editor.wordHighlightBackground': `${this.colorPalette.workbench.editor.wordHighlight.background}50`,
      'editor.wordHighlightStrongBackground': `${this.colorPalette.workbench.editor.wordHighlight.background}30`,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'editor.wordHighlightBorder': `${this.colorPalette.accent}50`,
      'editor.wordHighlightStrongBorder': `${this.colorPalette.accent}30`
    };
  }
}
