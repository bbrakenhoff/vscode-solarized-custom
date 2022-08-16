import { ColorSet } from '../color-set';

export class PeekViewColorSet extends ColorSet {
  propertiesAll() {
    return {
      'peekView.border': this.colorPalette.border,
      'peekViewEditor.background':
        this.colorPalette.workbench.peekView.editor.background,
      'peekViewEditor.matchHighlightBorder': this.colorPalette.border,
      'peekViewResult.background':
        this.colorPalette.workbench.peekView.result.background,
      'peekViewResult.lineForeground':
        this.colorPalette.workbench.peekView.result.lineForeground,
      'peekViewTitle.background':
        this.colorPalette.workbench.peekView.title.background,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'peekViewEditor.matchHighlightBackground': `${this.colorPalette.accent}30`,
      'peekViewResult.matchHighlightBackground': `${this.colorPalette.accent}40`,
      'peekViewResult.selectionBackground': `${this.colorPalette.accent}30`
    };
  }
}
