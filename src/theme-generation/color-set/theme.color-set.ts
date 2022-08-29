import * as Color from 'color';
import { ColorPalette } from '../color-palette/color-palette';
import { ThemeVariant } from '../theme-variant';
import { ColorSet } from './color-set';
import { SemanticTokenColorSet } from './syntax/semantic-token.color-set';
import { SymanticTokenSetting } from './syntax/syntax-token-setting';
import { TextMateScopeTokenColorSet } from './syntax/text-mate-token/text-mate-scope-token.color-set';
import { TextMateToken } from './syntax/text-mate-token/text-mate-token';
import { WorkbenchColorSet } from './workbench/workbench.color-set';

interface ThemeColorProperties {
  $schema: string;
  type: ThemeVariant;
  colors: Record<string, Color>;
  semanticHighlighting: boolean;
  semanticTokenColors: Record<string, Color | SymanticTokenSetting>;
  tokenColors: TextMateToken[];
}

export class ThemeColorSet extends ColorSet {
  private readonly workbenchColorSet: WorkbenchColorSet;

  constructor(private themeVariant: ThemeVariant, colorPalette: ColorPalette) {
    super(colorPalette);
    this.workbenchColorSet = new WorkbenchColorSet(this.colorPalette);
  }

  propertiesAll(): ThemeColorProperties {
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

  propertiesUsingAccentColor(): Record<string, Color> {
    return this.workbenchColorSet.propertiesUsingAccentColor();
  }
}
