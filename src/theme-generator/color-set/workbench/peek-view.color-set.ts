import { ColorSet } from '../color-set';

export class PeekViewColorSet extends ColorSet {
  get() {
    return {
      'peekView.border': this.colorPalette.border,
      'peekViewEditor.background':
        this.colorPalette.workbench.peekView.editor.background,
      'peekViewEditor.matchHighlightBackground': `${this.colorPalette.accentColor}30`,
      'peekViewEditor.matchHighlightBorder': this.colorPalette.border,
      'peekViewResult.background':
        this.colorPalette.workbench.peekView.result.background,
      'peekViewResult.lineForeground':
        this.colorPalette.workbench.peekView.result.lineForeground,
      'peekViewResult.matchHighlightBackground': `${this.colorPalette.accentColor}40`,
      'peekViewResult.selectionBackground': `${this.colorPalette.accentColor}30`,
      'peekViewTitle.background':
        this.colorPalette.workbench.peekView.title.background
    };
  }
}
