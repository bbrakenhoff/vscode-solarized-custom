import * as Color from 'color';
import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#editor-widget-colors
 */
export class EditorWidgetColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'debugExceptionWidget.background': this.colorPalette.border,
      'debugExceptionWidget.border': SolarizedColor.Red.color,
      'editorWidget.background':
        this.colorPalette.workbench.editorWidget.background,
      'editorWidget.border': this.colorPalette.workbench.editorWidget.border,
      'editorSuggestWidget.background':
        this.colorPalette.workbench.editorWidget.background,
      'editorSuggestWidget.border':
        this.colorPalette.workbench.editorWidget.border
    };
  }
}
