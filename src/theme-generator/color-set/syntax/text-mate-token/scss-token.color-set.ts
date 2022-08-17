import { SolarizedColorEnum } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class ScssTokenColorSet extends ColorSet {
  propertiesAll() {
    return [
      {
        name: 'SCSS.abstractClass',
        scope: 'entity.other.attribute-name.placeholder.css',
        settings: {
          foreground: SolarizedColorEnum.Green,
          fontStyle: 'italic'
        }
      },
      {
        name: 'SCSS.nestedClass',
        scope: ['entity.other.attribute-name.class.css'],
        settings: {
          foreground: SolarizedColorEnum.Green
        }
      },
      {
        name: 'SCSS.mixin',
        scope: ['entity.name.function.scss'],
        settings: {
          fontStyle: 'italic'
        }
      },
      {
        name: 'SCSS.supportFunction',
        scope: 'support.function.misc.scss',
        settings: {
          foreground: SolarizedColorEnum.Blue,
          fontStyle: 'italic'
        }
      },
      {
        name: 'SCSS.variable',
        scope: 'variable.scss',
        settings: {
          foreground: SolarizedColorEnum.Violet
        }
      }
    ];
  }
}
