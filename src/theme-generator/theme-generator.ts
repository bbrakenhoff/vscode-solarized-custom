import { ColorPalette } from './color-palette/color-palette';
import { ColorSet } from './color-set/color-set';
import { SemanticTokenColorSet } from './color-set/syntax/semantic-token.color-set';
import { TextMateScopeTokenColorSet } from './color-set/syntax/text-mate-token/text-mate-scope-token.color-set';
import { WorkbenchColorSet } from './color-set/workbench/workbench.color-set';
import { ThemeVariant } from './theme-variant';

export class ThemeColorSet extends ColorSet {
  constructor(private themeVariant: ThemeVariant, colorPalette: ColorPalette) {
    super(colorPalette);
  }

  get() {
    return {
      $schema: 'vscode://schemas/color-theme',
      type: this.themeVariant,
      colors: new WorkbenchColorSet(this.colorPalette).get(),
      semanticHighlighting: true,
      semanticTokenColors: new SemanticTokenColorSet(this.colorPalette).get(),
      tokenColors: new TextMateScopeTokenColorSet(this.colorPalette).get()
    };
  }
}
