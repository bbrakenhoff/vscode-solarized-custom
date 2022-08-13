import { ColorSet } from '../../color-set';
import { BasicTokenColorSet } from './basic-token.color-set';
import { CssTokenColorSet } from './css- token.color-set';
import { HtmlXmlTokenColorSet } from './html-xml-token.color-set';
import { JsonTokenColorSet } from './json-token.color-set';
import { ScssTokenColorSet } from './scss-token.color-set';

export class TextMateScopeTokenColorSet extends ColorSet {
  get() {
    return [
      ...new BasicTokenColorSet(this.colorPalette).get(),
      ...new CssTokenColorSet(this.colorPalette).get(),
      ...new ScssTokenColorSet(this.colorPalette).get(),
      ...new HtmlXmlTokenColorSet(this.colorPalette).get(),
      ...new JsonTokenColorSet(this.colorPalette).get()
    ];
  }
}
