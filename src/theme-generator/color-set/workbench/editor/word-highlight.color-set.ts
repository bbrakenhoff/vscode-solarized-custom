import { ColorSet } from '../../color-set';

export class WordHighlightColorSet extends ColorSet {
  get() {
    return {
      'editor.wordHighlightBackground': `${this.colorPalette.workbench.editor.wordHighlight.background}50`,
      'editor.wordHighlightBorder': `${this.colorPalette.accentColor}50`,
      'editor.wordHighlightStrongBackground': `${this.colorPalette.workbench.editor.wordHighlight.background}30`,
      'editor.wordHighlightStrongBorder': `${this.colorPalette.accentColor}30`
    };
  }
}
