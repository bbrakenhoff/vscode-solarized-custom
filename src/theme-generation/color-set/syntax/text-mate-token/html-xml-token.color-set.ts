import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';
import { TextMateToken } from './text-mate-token';

export class HtmlXmlTokenColorSet extends ColorSet {
  propertiesAll(): TextMateToken[] {
    return [
      {
        name: 'HTML+XML.attribute',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: SolarizedColor.Violet.color
        }
      },
      {
        name: 'HTML+XML.attributeSeparator',
        scope: ['punctuation.separator.key-value.html'],
        settings: {
          foreground: SolarizedColor.Blue.color
        }
      },
      {
        name: 'HTML+XML.content',
        scope: ['text.html.derivative'],
        settings: {
          foreground: SolarizedColor.Yellow.color
        }
      },
      {
        name: 'HTML+XML.specialChar',
        scope: ['constant.character.entity.named.nbsp.html'],
        settings: {
          foreground: SolarizedColor.Green.color,
          fontStyle: 'bold'
        }
      },
      {
        name: 'HTML+XML.tag',
        scope: ['punctuation.definition.tag'],
        settings: {
          foreground: SolarizedColor.Blue.color
        }
      },
      {
        name: 'HTML+XML.tagName',
        scope: ['entity.name.tag'],
        settings: {
          foreground: SolarizedColor.Magenta.color
        }
      }
    ];
  }
}
