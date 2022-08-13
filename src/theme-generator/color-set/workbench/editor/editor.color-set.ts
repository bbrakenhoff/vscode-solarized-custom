import { ColorSet } from '../../color-set';
import { BracketsColorSet } from './brackets.color-set';
import { IndentGuideColorSet } from './indent-guide.color-set';
import { WordHighlightColorSet } from './word-highlight.color-set';

export class EditorColorsSet extends ColorSet {
  get() {
    return {
      'editor.background': this.colorPalette.defaultBackground,
      'editor.foreground': this.colorPalette.defaultForeground,
      'editorLineNumber.activeForeground':
        this.colorPalette.workbench.editor.lineNumber.activeForeground,
      'editorLineNumber.foreground':
        this.colorPalette.workbench.editor.lineNumber.foreground,
      'editor.lineHighlightBackground':
        this.colorPalette.defaultHighlightBackground,
      'editor.selectionBackground':
        this.colorPalette.defaultHighlightBackground,
      'editorCursor.foreground': this.colorPalette.defaultForeground,
      ...new BracketsColorSet(this.colorPalette).get(),
      ...new IndentGuideColorSet(this.colorPalette).get(),
      ...new WordHighlightColorSet(this.colorPalette).get()
    };
  }
}
