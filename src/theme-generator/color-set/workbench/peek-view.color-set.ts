import { ColorSet } from '../color-set';

export class PeekViewColorSet extends ColorSet {
  propertiesAll() {
    return {
      'peekView.border': this.colorPalette.border.hexa(),
      'peekViewEditor.background':
        this.colorPalette.workbench.peekView.editor.background.hexa(),
      'peekViewEditor.matchHighlightBorder': this.colorPalette.border.hexa(),
      'peekViewResult.background':
        this.colorPalette.workbench.peekView.result.background.hexa(),
      'peekViewResult.lineForeground':
        this.colorPalette.workbench.peekView.result.lineForeground.hexa(),
      'peekViewTitle.background':
        this.colorPalette.workbench.peekView.title.background.hexa(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'peekViewEditor.matchHighlightBackground': this.colorPalette.accent
        .alpha(0.2)
        .hexa(),
      'peekViewResult.matchHighlightBackground': this.colorPalette.accent
        .alpha(0.25)
        .hexa(),
      'peekViewResult.selectionBackground': this.colorPalette.accent
        .alpha(0.2)
        .hexa()
    };
  }
}
