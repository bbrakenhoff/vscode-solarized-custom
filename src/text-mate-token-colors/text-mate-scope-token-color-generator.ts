import { ColorsGenerator } from "../colors-generator";
import { BasicTokenColorsGenerator } from "./basic-token-colors-generator";
import { CssTokenColorsGenerator } from "./css- token-colors-generator";
import { HtmlXmlTokenColorsGenerator } from "./html-xml-token-colors-generator";
import { JsonTokenColorsGenerator } from "./json-token-colors-generator";
import { ScssTokenColorsGenerator } from "./scss-token-colors-generator";

export class TextMateScopeTokenColorsGenerator extends ColorsGenerator {
  generate(): Object[] {
    return [
      ...new BasicTokenColorsGenerator(this.themeVariant).generate(),
      ...new CssTokenColorsGenerator(this.themeVariant).generate(),
      ...new ScssTokenColorsGenerator(this.themeVariant).generate(),
      ...new HtmlXmlTokenColorsGenerator(this.themeVariant).generate(),
      ...new JsonTokenColorsGenerator(this.themeVariant).generate()
    ];
  }
}
