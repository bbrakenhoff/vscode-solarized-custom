import * as Color from 'color';
import { ColorSet } from '../../color-set';

export class IndentGuideColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'editorIndentGuide.activeBackground':
        this.colorPalette.workbench.editor.indentGuide.activeBackground,
      'editorIndentGuide.background':
        this.colorPalette.workbench.editor.indentGuide.background
    };
  }
}
