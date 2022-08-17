import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';

export class ScssTokenColorSet extends ColorSet {
  propertiesAll() {
    return [
      {
        name: 'SCSS.abstractClass',
        scope: 'entity.other.attribute-name.placeholder.css',
        settings: {
          foreground: SolarizedColor.Green.color.hexa(),
          fontStyle: 'italic'
        }
      },
      {
        name: 'SCSS.nestedClass',
        scope: ['entity.other.attribute-name.class.css'],
        settings: {
          foreground: SolarizedColor.Green.color.hexa()
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
          foreground: SolarizedColor.Blue.color.hexa(),
          fontStyle: 'italic'
        }
      },
      {
        name: 'SCSS.variable',
        scope: 'variable.scss',
        settings: {
          foreground: SolarizedColor.Violet.color.hexa()
        }
      }
    ];
  }
}
