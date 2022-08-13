import { ThemeDependentColorSet } from '../../theme-dependent-colors-set';
import { SolarizedColor } from '../../../../solarized-color';

export class JsonTokenColorSet extends ThemeDependentColorSet {
  get() {
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
          foreground: SolarizedColor.Yellow
        }
      },
      {
        name: 'JSON.propertyName',
        scope: ['support.type.property-name.json'],
        settings: {
          foreground: SolarizedColor.Violet
        }
      }
    ];
  }
}
