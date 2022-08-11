import { ColorsGenerator } from "./colors-generator";
import { SemanticTokenColorGenerator } from "./semantic-token-color-generator";
import { TextMateScopeTokenColorsGenerator } from "./text-mate-token-colors/text-mate-scope-token-color-generator";
import { ThemeVariant } from "./theme-variant";
import { WorkbenchColorsGenerator } from "./workbench-colors/workbench-colors-generator";
import Ajv from "ajv";
export class ThemeJsonGenerator extends ColorsGenerator {
  generate(): Object {
    return {
      $schema: "vscode://schemas/color-theme",
      type: this.themeVariant,
      colors: new WorkbenchColorsGenerator(this.themeVariant).generate(),
      semanticHighlighting: true,
      semanticTokenColors: new SemanticTokenColorGenerator(
        this.themeVariant
      ).generate(),
      tokenColors: new TextMateScopeTokenColorsGenerator(
        this.themeVariant
      ).generate(),
    };
  }

  static generateJson(themeVariant: ThemeVariant): string {
    return JSON.stringify(new ThemeJsonGenerator(themeVariant).generate());
  }
}