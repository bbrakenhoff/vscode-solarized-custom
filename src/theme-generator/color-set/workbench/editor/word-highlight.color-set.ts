import { ColorSet } from '../../color-set';

export class WordHighlightColorSet extends ColorSet {
  get() {
    return {
      'editor.wordHighlightBackground': `${this.colorPalette.workbench.editor.wordHighlight.background}50`,
      'editor.wordHighlightBorder': `${this.colorPalette.accent}50`,
      'editor.wordHighlightStrongBackground': `${this.colorPalette.workbench.editor.wordHighlight.background}30`,
      'editor.wordHighlightStrongBorder': `${this.colorPalette.accent}30`
    };
  }
}
