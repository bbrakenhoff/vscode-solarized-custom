import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';
import { TextMateToken } from './text-mate-token';

export class JsonTokenColorSet extends ColorSet {
  propertiesAll(): TextMateToken[] {
    return [
      {
        name: 'JSON.quotes',
        scope: [
          'punctuation.definition.string.begin.json',
          'punctuation.definition.string.end.json',
          'punctuation.support.type.property-name.begin.json',
          'punctuation.support.type.property-name.end.json'
        ],
        settings: {
          foreground: SolarizedColor.Yellow.color
        }
      },
      {
        name: 'JSON.propertyName',
        scope: ['support.type.property-name.json'],
        settings: {
          foreground: SolarizedColor.Violet.color
        }
      }
    ];
  }
}
