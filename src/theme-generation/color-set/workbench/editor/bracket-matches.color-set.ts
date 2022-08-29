import * as Color from 'color';
import { ColorSet } from '../../color-set';

export class BracketMatchesColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'editorBracketMatch.background':
        this.colorPalette.workbench.editor.brackets.matchBackground,
      'editorBracketMatch.border':
        this.colorPalette.workbench.editor.brackets.matchBorder
    };
  }
}
