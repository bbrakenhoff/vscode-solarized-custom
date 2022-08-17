import { SolarizedColorEnum } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class BracketsColorSet extends ColorSet {
  propertiesAll() {
    return {
      'editorBracketHighlight.foreground1': SolarizedColorEnum.Yellow,
      'editorBracketHighlight.foreground2': SolarizedColorEnum.Orange,
      'editorBracketHighlight.foreground3': SolarizedColorEnum.Violet,
      'editorBracketHighlight.foreground4': SolarizedColorEnum.Blue,
      'editorBracketHighlight.foreground5': SolarizedColorEnum.Cyan,
      'editorBracketHighlight.foreground6': SolarizedColorEnum.Green,
      'editorBracketMatch.background':
        this.colorPalette.workbench.editor.brackets.matchBackground,
      'editorBracketMatch.border':
        this.colorPalette.workbench.editor.brackets.matchBorder
    };
  }
}
