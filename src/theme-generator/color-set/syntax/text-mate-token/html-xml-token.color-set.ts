import { SolarizedColorEnum } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class HtmlXmlTokenColorSet extends ColorSet {
  propertiesAll() {
    return [
      {
        name: 'HTML+XML.attribute',
        scope: ['entity.other.attribute-name'],
        settings: {
          foreground: SolarizedColorEnum.Violet
        }
      },
      {
        name: 'HTML+XML.attributeSeparator',
        scope: ['punctuation.separator.key-value.html'],
        settings: {
          foreground: SolarizedColorEnum.Blue
        }
      },
      {
        name: 'HTML+XML.content',
        scope: ['text.html.derivative'],
        settings: {
          foreground: SolarizedColorEnum.Yellow
        }
      },
      {
        name: 'HTML+XML.specialChar',
        scope: ['constant.character.entity.named.nbsp.html'],
        settings: {
          foreground: SolarizedColorEnum.Green,
          fontStyle: 'bold'
        }
      },
      {
        name: 'HTML+XML.tag',
        scope: ['punctuation.definition.tag'],
        settings: {
          foreground: SolarizedColorEnum.Blue
        }
      },
      {
        name: 'HTML+XML.tagName',
        scope: ['entity.name.tag'],
        settings: {
          foreground: SolarizedColorEnum.Magenta
        }
      }
    ];
  }
}
