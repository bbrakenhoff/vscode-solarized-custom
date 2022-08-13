import { ColorSet } from '../../colors-set';
import { BasicTokenColorSet } from './basic-token.color-set';
import { CssTokenColorSet } from './css- token.color-set';
import { HtmlXmlTokenColorSet } from './html-xml-token.color-set';
import { JsonTokenColorSet } from './json-token.color-set';
import { ScssTokenColorSet } from './scss-token.color-set';

export class TextMateScopeTokenColorSet extends ColorSet {
  generate() {
    return [
      ...new BasicTokenColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new CssTokenColorSet(this.themeVariant, this.colorPalette).generate(),
      ...new ScssTokenColorSet(this.themeVariant, this.colorPalette).generate(),
      ...new HtmlXmlTokenColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new JsonTokenColorSet(this.themeVariant, this.colorPalette).generate()
    ];
  }
}
