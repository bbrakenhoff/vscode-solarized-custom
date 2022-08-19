import { ColorSet } from '../../color-set';

export class IndentGuideColorSet extends ColorSet {
  propertiesAll() {
    return {
      'editorIndentGuide.activeBackground':
        this.colorPalette.workbench.editor.indentGuide.activeBackground,
      'editorIndentGuide.background':
        this.colorPalette.workbench.editor.indentGuide.background
    };
  }
}
