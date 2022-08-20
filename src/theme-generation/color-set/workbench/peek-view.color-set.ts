import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#peek-view-colors
 */
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
      'peekViewEditor.matchHighlightBackground': this.colorPalette.accent
        .alpha(0.2)
        ,
      'peekViewResult.matchHighlightBackground': this.colorPalette.accent
        .alpha(0.25)
        ,
      'peekViewResult.selectionBackground': this.colorPalette.accent
        .alpha(0.2)
        
    };
  }
}
