import { ColorSet } from '../../color-set';

export class WordHighlightColorSet extends ColorSet {
  propertiesAll() {
    return {
      'editor.wordHighlightBackground':
        this.colorPalette.workbench.editor.wordHighlight.background
          .alpha(0.3)
          ,
      'editor.wordHighlightStrongBackground':
        this.colorPalette.workbench.editor.wordHighlight.background.alpha(0.2),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'editor.wordHighlightBorder': this.colorPalette.accent.alpha(0.05),
      'editor.wordHighlightStrongBorder': this.colorPalette.accent
        .alpha(0.2)
        
    };
  }
}
