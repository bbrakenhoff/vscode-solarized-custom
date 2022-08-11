import { ColorsGenerator } from "../colors-generator";
import { SolarizedColor } from "../solarized-color";

export class EditorColorsGenerator extends ColorsGenerator {
  generate(): Object {
    return {
      "editor.background": this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      "editor.foreground": this.isGeneratingLightTheme
        ? SolarizedColor.Base00
        : SolarizedColor.Base0,
      "editorLineNumber.activeForeground": this.isGeneratingLightTheme
        ? SolarizedColor.Base00
        : SolarizedColor.Base1,
      "editorLineNumber.foreground": this.isGeneratingLightTheme
        ? `${SolarizedColor.Base00}80`
        : `${SolarizedColor.Base1}50`,
      "editor.lineHighlightBackground": this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : SolarizedColor.Base02,
      "editor.selectionBackground": this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : SolarizedColor.Base02,
      "editorCursor.foreground": this.accentColor,
      ...this.generateEditorBracketsColors(),
      ...this.generateEditorWordHighlightColors(),
      ...this.generateIndentGuideColors(),
    };
  }

  private generateEditorBracketsColors() {
    return {
      "editorBracketHighlight.foreground1": SolarizedColor.Yellow,
      "editorBracketHighlight.foreground2": SolarizedColor.Orange,
      "editorBracketHighlight.foreground3": SolarizedColor.Violet,
      "editorBracketHighlight.foreground4": SolarizedColor.Blue,
      "editorBracketHighlight.foreground5": SolarizedColor.Cyan,
      "editorBracketHighlight.foreground6": SolarizedColor.Green,
      "editorBracketMatch.background": this.isGeneratingLightTheme
        ? `${SolarizedColor.Base1}50`
        : "#00212B",
      "editorBracketMatch.border": this.isGeneratingLightTheme
        ? "#ccc4b0"
        : `${SolarizedColor.Base01}70`,
    };
  }

  private generateEditorWordHighlightColors() {
    return {
      "editor.wordHighlightBackground": `${
        this.isGeneratingLightTheme
          ? SolarizedColor.Base1
          : SolarizedColor.Base01
      }50`,
      "editor.wordHighlightBorder": `${this.accentColor}50`,
      "editor.wordHighlightStrongBackground": `${
        this.isGeneratingLightTheme
          ? SolarizedColor.Base1
          : SolarizedColor.Base01
      }30`,
      "editor.wordHighlightStrongBorder": `${this.accentColor}30`,
    };
  }

  private generateIndentGuideColors() {
    return {
      "editorIndentGuide.background": `${SolarizedColor.Base1}${
        this.isGeneratingLightTheme ? 50 : 20
      }`,
      "editorIndentGuide.activeBackground": this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1,
    };
  }
}
