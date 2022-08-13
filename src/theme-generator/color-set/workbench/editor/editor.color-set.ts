import { SolarizedColor } from '../../../../solarized-color';
import { IndentGuideColorSet } from './indent-guide.color-set';
import { WordHighlightColorSet } from './word-highlight.color-set';
import { BracketsColorSet } from './brackets.color-set';
import { ColorSet } from '../../colors-set';

export class EditorColorsSet extends ColorSet {
  generate() {
    return {
      'editor.background': this.colorPalette.defaultBackground,
      'editor.foreground': this.colorPalette.defaultForeground,
      'editorLineNumber.activeForeground': this.isGeneratingLightTheme
        ? SolarizedColor.Base00
        : SolarizedColor.Base1,
      'editorLineNumber.foreground': this.isGeneratingLightTheme
        ? `${SolarizedColor.Base00}80`
        : `${SolarizedColor.Base1}50`,
      'editor.lineHighlightBackground': this.colorPalette.defaultHighlightBackground,
      'editor.selectionBackground': this.colorPalette.defaultHighlightBackground,
      'editorCursor.foreground': this.colorPalette.defaultForeground,
      ...new BracketsColorSet(this.themeVariant,this.colorPalette).generate(),
      ...new WordHighlightColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new IndentGuideColorSet(this.themeVariant,this.colorPalette).generate()
    };
  }
}
