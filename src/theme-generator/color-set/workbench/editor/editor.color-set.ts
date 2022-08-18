import { ColorSet } from '../../color-set';
import { BracketsColorSet } from './brackets.color-set';
import { IndentGuideColorSet } from './indent-guide.color-set';
import { WordHighlightColorSet } from './word-highlight.color-set';

export class EditorColorsSet extends ColorSet {
  private readonly wordHighlightColorSet = new WordHighlightColorSet(
    this.colorPalette
  );

  propertiesAll() {
    return {
      'editor.background': this.colorPalette.defaultBackground.hexa(),
      'editor.foreground': this.colorPalette.defaultForeground.hexa(),
      'editorLineNumber.activeForeground':
        this.colorPalette.workbench.editor.lineNumber.activeForeground.hexa(),
      'editorLineNumber.foreground':
        this.colorPalette.workbench.editor.lineNumber.foreground.hexa(),
      'editor.lineHighlightBackground':
        this.colorPalette.defaultHighlightBackground.hexa(),
      'editor.selectionBackground':
        this.colorPalette.defaultHighlightBackground.hexa(),
      'editorCursor.foreground': this.colorPalette.defaultForeground.hexa(),
      ...new BracketsColorSet(this.colorPalette).propertiesAll(),
      ...new IndentGuideColorSet(this.colorPalette).propertiesAll(),
      ...this.wordHighlightColorSet.propertiesAll()
    };
  }

  propertiesUsingAccentColor() {
    return this.wordHighlightColorSet.propertiesUsingAccentColor();
  }
}
