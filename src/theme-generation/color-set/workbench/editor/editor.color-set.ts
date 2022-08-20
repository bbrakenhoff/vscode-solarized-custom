import { ColorSet } from '../../color-set';
import { EditorWidgetColorSet } from '../editor-widget.color-set';
import { BracketMatchesColorSet } from './bracket-matches.color-set';
import { BracketPairColorizationColorSet } from './brackets-pair-colorizations.color-set';
import { IndentGuideColorSet } from './indent-guide.color-set';
import { WordHighlightColorSet } from './word-highlight.color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#editor-colors
 */
export class EditorColorsSet extends ColorSet {
  private readonly wordHighlightColorSet = new WordHighlightColorSet(
    this.colorPalette
  );

  propertiesAll() {
    return {
      'editor.background': this.colorPalette.defaultBackground,
      'editor.foreground': this.colorPalette.defaultForeground,
      'editorCursor.foreground': this.colorPalette.defaultForeground,
      'editorLineNumber.activeForeground':
        this.colorPalette.workbench.editor.lineNumber.activeForeground,
      'editorLineNumber.foreground':
        this.colorPalette.workbench.editor.lineNumber.foreground,
      'editor.lineHighlightBackground':
        this.colorPalette.defaultHighlightBackground,
      'editor.selectionBackground':
        this.colorPalette.defaultHighlightBackground,
      ...new BracketMatchesColorSet(this.colorPalette).propertiesAll(),
      ...new BracketPairColorizationColorSet(this.colorPalette).propertiesAll(),
      ...new IndentGuideColorSet(this.colorPalette).propertiesAll(),
      ...new EditorWidgetColorSet(this.colorPalette).propertiesAll(),
      ...this.wordHighlightColorSet.propertiesAll()
    };
  }

  propertiesUsingAccentColor() {
    return this.wordHighlightColorSet.propertiesUsingAccentColor();
  }
}
