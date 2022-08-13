import { ThemeDependentColorSet } from '../../theme-dependent-colors-set';
import { BasicTokenColorSet } from './basic-token.color-set';
import { CssTokenColorSet } from './css- token.color-set';
import { HtmlXmlTokenColorSet } from './html-xml-token.color-set';
import { JsonTokenColorSet } from './json-token.color-set';
import { ScssTokenColorSet } from './scss-token.color-set';

export class TextMateScopeTokenColorSet extends ThemeDependentColorSet {
  get() {
    return [
      ...new BasicTokenColorSet(
        this.themeVariant,
        this.colorPalette
      ).get(),
      ...new CssTokenColorSet(this.themeVariant, this.colorPalette).get(),
      ...new ScssTokenColorSet(this.themeVariant, this.colorPalette).get(),
      ...new HtmlXmlTokenColorSet(
        this.themeVariant,
        this.colorPalette
      ).get(),
      ...new JsonTokenColorSet(this.themeVariant, this.colorPalette).get()
    ];
  }
}
