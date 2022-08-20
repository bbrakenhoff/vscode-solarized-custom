import { ColorSet } from '../../color-set';

export class BracketMatchesColorSet extends ColorSet {
  propertiesAll() {
    return {
      'editorBracketMatch.background':
        this.colorPalette.workbench.editor.brackets.matchBackground,
      'editorBracketMatch.border':
        this.colorPalette.workbench.editor.brackets.matchBorder
    };
  }
}
