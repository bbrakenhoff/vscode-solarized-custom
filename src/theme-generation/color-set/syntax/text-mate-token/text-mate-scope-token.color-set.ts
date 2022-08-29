import { ColorSet } from '../../color-set';
import { BasicTokenColorSet } from './basic-token.color-set';
import { CssTokenColorSet } from './css- token.color-set';
import { HtmlXmlTokenColorSet } from './html-xml-token.color-set';
import { JsonTokenColorSet } from './json-token.color-set';
import { ScssTokenColorSet } from './scss-token.color-set';
import { TextMateToken } from './text-mate-token';

export class TextMateScopeTokenColorSet extends ColorSet {
  propertiesAll(): TextMateToken[] {
    return [
      ...new BasicTokenColorSet(this.colorPalette).propertiesAll(),
      ...new CssTokenColorSet(this.colorPalette).propertiesAll(),
      ...new ScssTokenColorSet(this.colorPalette).propertiesAll(),
      ...new HtmlXmlTokenColorSet(this.colorPalette).propertiesAll(),
      ...new JsonTokenColorSet(this.colorPalette).propertiesAll()
    ];
  }
}
