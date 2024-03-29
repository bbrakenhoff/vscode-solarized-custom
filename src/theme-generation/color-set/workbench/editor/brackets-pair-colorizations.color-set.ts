import * as Color from 'color';
import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class BracketPairColorizationColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'editorBracketHighlight.foreground1': SolarizedColor.Yellow.color,
      'editorBracketHighlight.foreground2': SolarizedColor.Orange.color,
      'editorBracketHighlight.foreground3': SolarizedColor.Violet.color,
      'editorBracketHighlight.foreground4': SolarizedColor.Blue.color,
      'editorBracketHighlight.foreground5': SolarizedColor.Cyan.color,
      'editorBracketHighlight.foreground6': SolarizedColor.Green.color
    };
  }
}
