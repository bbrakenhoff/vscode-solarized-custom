import { ThemeDependentColorSet } from '../../theme-dependent-colors-set';
import { SolarizedColor } from '../../../../solarized-color';

export class ScssTokenColorSet extends ThemeDependentColorSet {
  get() {
    return [
      {
        name: 'SCSS.abstractClass',
        scope: 'entity.other.attribute-name.placeholder.css',
        settings: {
          foreground: SolarizedColor.Green,
          fontStyle: 'italic'
        }
      },
      {
        name: 'SCSS.nestedClass',
        scope: ['entity.other.attribute-name.class.css'],
        settings: {
          foreground: SolarizedColor.Green
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
          foreground: SolarizedColor.Blue,
          fontStyle: 'italic'
        }
      },
      {
        name: 'SCSS.variable',
        scope: 'variable.scss',
        settings: {
          foreground: SolarizedColor.Violet
        }
      }
    ];
  }
}
