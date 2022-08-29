import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';
import { TextMateToken } from './text-mate-token';

export class CssTokenColorSet extends ColorSet {
  propertiesAll(): TextMateToken[] {
    return [
      {
        name: 'CSS.class',
        scope: ['entity.other.attribute-name.class.css'],
        settings: {
          foreground: SolarizedColor.Green.color
        }
      },
      {
        name: 'CSS.id',
        scope: ['entity.other.attribute-name.id.css'],
        settings: {
          foreground: SolarizedColor.Green.color,
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
          foreground: SolarizedColor.Orange.color
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
          foreground: SolarizedColor.Magenta.color
        }
      },
      {
        name: 'CSS.tag',
        scope: ['entity.name.tag.css'],
        settings: {
          foreground: SolarizedColor.Magenta.color
        }
      },
      {
        name: 'CSS.unit',
        scope: ['keyword.other.unit'],
        settings: {
          foreground: SolarizedColor.Yellow.color
        }
      }
    ];
  }
}
