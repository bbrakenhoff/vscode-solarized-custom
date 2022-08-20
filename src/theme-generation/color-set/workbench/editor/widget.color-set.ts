import { ColorSet } from '../../color-set';

export class WidgetColorSet extends ColorSet {
  propertiesAll() {
    return {
      'editorWidget.background': this.colorPalette.workbench.editor.widget.background,
      'editorWidget.border': this.colorPalette.workbench.editor.widget.border,
      'editorSuggestWidget.background':this.colorPalette.workbench.editor.widget.background,
      'editorSuggestWidget.border': this.colorPalette.workbench.editor.widget.border
    };
  }
}
