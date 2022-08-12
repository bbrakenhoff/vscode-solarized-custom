import { ColorsGenerator } from '../colors-generator';
import { BasicTokenColorsGenerator } from './basic-token-colors-generator';
import { CssTokenColorsGenerator } from './css- token-colors-generator';
import { HtmlXmlTokenColorsGenerator } from './html-xml-token-colors-generator';
import { JsonTokenColorsGenerator } from './json-token-colors-generator';
import { ScssTokenColorsGenerator } from './scss-token-colors-generator';

export class TextMateScopeTokenColorsGenerator extends ColorsGenerator {
  generate() {
    return [
      ...new BasicTokenColorsGenerator(
        this.themeVariant,
        this.accentColor
      ).generate(),
      ...new CssTokenColorsGenerator(
        this.themeVariant,
        this.accentColor
      ).generate(),
      ...new ScssTokenColorsGenerator(
        this.themeVariant,
        this.accentColor
      ).generate(),
      ...new HtmlXmlTokenColorsGenerator(
        this.themeVariant,
        this.accentColor
      ).generate(),
      ...new JsonTokenColorsGenerator(
        this.themeVariant,
        this.accentColor
      ).generate()
    ];
  }
}
