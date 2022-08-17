import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class CssTokenColorSet extends ColorSet {
  propertiesAll() {
    return [
      {
        name: 'CSS.class',
        scope: ['entity.other.attribute-name.class.css'],
        settings: {
          foreground: SolarizedColor.Green.color.hexa()
        }
      },
      {
        name: 'CSS.id',
        scope: ['entity.other.attribute-name.id.css'],
        settings: {
          foreground: SolarizedColor.Green.color.hexa(),
          fontStyle: 'bold'
        }
      },
      {
        name: 'CSS.mediaRule',
        scope: ['support.constant.media.css', 'keyword.operator.logical.scss'],
        settings: {
          fontStyle: 'italic'
        }
      },
      {
        name: 'CSS.propertyValue',
        scope: ['support.constant.property-value.css'],
        settings: {
          foreground: SolarizedColor.Orange.color.hexa()
        }
      },
      {
        name: 'CSS.pseudoElement/CSS.pseudoClass',
        scope: [
          'entity.other.attribute-name.pseudo-element.css',
          'entity.other.attribute-name.pseudo-class.css'
        ],
        settings: {
          fontStyle: 'italic',
          foreground: SolarizedColor.Magenta.color.hexa()
        }
      },
      {
        name: 'CSS.tag',
        scope: 'entity.name.tag.css',
        settings: {
          foreground: SolarizedColor.Magenta.color.hexa()
        }
      },
      {
        name: 'CSS.unit',
        scope: ['keyword.other.unit'],
        settings: {
          foreground: SolarizedColor.Yellow.color.hexa()
        }
      }
    ];
  }
}
