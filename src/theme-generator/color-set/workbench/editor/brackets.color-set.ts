import { SolarizedColor } from "../../../../solarized-color";
import { ColorSet } from "../../colors-set";

export class BracketsColorSet extends ColorSet{
  generate() {
    return {
      'editorBracketHighlight.foreground1': SolarizedColor.Yellow,
      'editorBracketHighlight.foreground2': SolarizedColor.Orange,
      'editorBracketHighlight.foreground3': SolarizedColor.Violet,
      'editorBracketHighlight.foreground4': SolarizedColor.Blue,
      'editorBracketHighlight.foreground5': SolarizedColor.Cyan,
      'editorBracketHighlight.foreground6': SolarizedColor.Green,
      'editorBracketMatch.background': this.isGeneratingLightTheme
        ? `${SolarizedColor.Base1}50`
        : '#00212B',
      'editorBracketMatch.border': this.isGeneratingLightTheme
        ? '#ccc4b0'
        : `${SolarizedColor.Base01}70`
    };
  }
}