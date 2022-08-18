import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class BracketsColorSet extends ColorSet {
  propertiesAll() {
    return {
      'editorBracketHighlight.foreground1': SolarizedColor.Yellow.color.hexa(),
      'editorBracketHighlight.foreground2': SolarizedColor.Orange.color.hexa(),
      'editorBracketHighlight.foreground3': SolarizedColor.Violet.color.hexa(),
      'editorBracketHighlight.foreground4': SolarizedColor.Blue.color.hexa(),
      'editorBracketHighlight.foreground5': SolarizedColor.Cyan.color.hexa(),
      'editorBracketHighlight.foreground6': SolarizedColor.Green.color.hexa(),
      'editorBracketMatch.background':
        this.colorPalette.workbench.editor.brackets.matchBackground.hexa(),
      'editorBracketMatch.border':
        this.colorPalette.workbench.editor.brackets.matchBorder.hexa()
    };
  }
}
