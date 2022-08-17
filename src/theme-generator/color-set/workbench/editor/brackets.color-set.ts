import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class BracketsColorSet extends ColorSet {
  propertiesAll() {
    return {
      'editorBracketHighlight.foreground1': SolarizedColor.Yellow.color.hex(),
      'editorBracketHighlight.foreground2': SolarizedColor.Orange.color.hex(),
      'editorBracketHighlight.foreground3': SolarizedColor.Violet.color.hex(),
      'editorBracketHighlight.foreground4': SolarizedColor.Blue.color.hex(),
      'editorBracketHighlight.foreground5': SolarizedColor.Cyan.color.hex(),
      'editorBracketHighlight.foreground6': SolarizedColor.Green.color.hex(),
      'editorBracketMatch.background':
        this.colorPalette.workbench.editor.brackets.matchBackground,
      'editorBracketMatch.border':
        this.colorPalette.workbench.editor.brackets.matchBorder
    };
  }
}
