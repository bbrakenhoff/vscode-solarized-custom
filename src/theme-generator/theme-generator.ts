import { SemanticTokenColorSet } from './color-set/code/semantic-token.color-set';
import { TextMateScopeTokenColorSet } from './color-set/code/text-mate-token/text-mate-scope-token.color-set';
import { ColorSet } from './color-set/colors-set';
import { WorkbenchColorSet } from './color-set/workbench/workbench.color-set';

export class ThemeColorSet extends ColorSet {
  generate() {
    return {
      $schema: 'vscode://schemas/color-theme',
      type: this.themeVariant,
      colors: new WorkbenchColorSet(this.themeVariant, this.colorPalette).generate(),
      semanticHighlighting: true,
      semanticTokenColors: new SemanticTokenColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      tokenColors: new TextMateScopeTokenColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate()
    };
  }
}
