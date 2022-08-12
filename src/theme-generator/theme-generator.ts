import { SolarizedColor } from '../solarized-color';
import { ColorsGenerator } from './colors-generator';
import { SemanticTokenColorGenerator } from './semantic-token-color-generator';
import { TextMateScopeTokenColorsGenerator } from './text-mate-token-colors/text-mate-scope-token-color-generator';
import { ThemeVariant } from './theme-variant';
import { WorkbenchColorsGenerator } from './workbench-colors/workbench-colors-generator';

export class ThemeGenerator extends ColorsGenerator {
  generate() {
    return {
      $schema: 'vscode://schemas/color-theme',
      type: this.themeVariant,
      colors: new WorkbenchColorsGenerator(this.themeVariant, this.accentColor).generate(),
      semanticHighlighting: true,
      semanticTokenColors: new SemanticTokenColorGenerator(
        this.themeVariant,
        this.accentColor
      ).generate(),
      tokenColors: new TextMateScopeTokenColorsGenerator(
        this.themeVariant,
        this.accentColor
      ).generate()
    };
  }
}