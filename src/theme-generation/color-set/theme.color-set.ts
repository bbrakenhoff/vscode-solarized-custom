import { ColorPalette } from '../color-palette/color-palette';
import { ThemeVariant } from '../theme-variant';
import { ColorSet } from './color-set';
import { SemanticTokenColorSet } from './syntax/semantic-token.color-set';
import { TextMateScopeTokenColorSet } from './syntax/text-mate-token/text-mate-scope-token.color-set';
import { WorkbenchColorSet } from './workbench/workbench.color-set';

export class ThemeColorSet extends ColorSet {
  private readonly workbenchColorSet: WorkbenchColorSet;

  constructor(private themeVariant: ThemeVariant, colorPalette: ColorPalette) {
    super(colorPalette);
    this.workbenchColorSet = new WorkbenchColorSet(this.colorPalette);
  }

  propertiesAll() {
    return {
      $schema: 'vscode://schemas/color-theme',
      type: this.themeVariant,
      colors: this.workbenchColorSet.propertiesAll(),
      semanticHighlighting: true,
      semanticTokenColors: new SemanticTokenColorSet(
        this.colorPalette
      ).propertiesAll(),
      tokenColors: new TextMateScopeTokenColorSet(
        this.colorPalette
      ).propertiesAll()
    };
  }

  propertiesUsingAccentColor() {
    return this.workbenchColorSet.propertiesUsingAccentColor();
  }
}
