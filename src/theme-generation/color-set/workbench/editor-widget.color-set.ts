import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#editor-widget-colors
 */
export class EditorWidgetColorSet extends ColorSet {
  propertiesAll() {
    return {
      'debugExceptionWidget.background': this.colorPalette.border,
      'debugExceptionWidget.border': SolarizedColor.Red.color,
      'editorWidget.background': this.colorPalette.workbench.editor.widget.background,
      'editorWidget.border': this.colorPalette.workbench.editor.widget.border,
      'editorSuggestWidget.background':this.colorPalette.workbench.editor.widget.background,
      'editorSuggestWidget.border': this.colorPalette.workbench.editor.widget.border
    };
  }
}
