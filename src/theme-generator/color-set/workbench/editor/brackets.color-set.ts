import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class BracketsColorSet extends ColorSet {
  get() {
    return {
      'editorBracketHighlight.foreground1': SolarizedColor.Yellow,
      'editorBracketHighlight.foreground2': SolarizedColor.Orange,
      'editorBracketHighlight.foreground3': SolarizedColor.Violet,
      'editorBracketHighlight.foreground4': SolarizedColor.Blue,
      'editorBracketHighlight.foreground5': SolarizedColor.Cyan,
      'editorBracketHighlight.foreground6': SolarizedColor.Green,
      'editorBracketMatch.background':
        this.colorPalette.workbench.editor.brackets.matchBackground,
      'editorBracketMatch.border':
        this.colorPalette.workbench.editor.brackets.matchBorder
    };
  }
}
