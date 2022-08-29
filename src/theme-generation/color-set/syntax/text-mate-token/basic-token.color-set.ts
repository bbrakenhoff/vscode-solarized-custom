import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../color-set';
import { TextMateToken } from './text-mate-token';

export class BasicTokenColorSet extends ColorSet {
  propertiesAll(): TextMateToken[] {
    return [
      {
        name: 'class',
        scope: ['entity.name.type', 'entity.name.type.class'],
        settings: {
          foreground: SolarizedColor.Green.color
        }
      },
      {
        name: 'decorator',
        scope: ['meta.decorator'],
        settings: {
          foreground: SolarizedColor.Orange.color
        }
      },
      {
        name: 'function',
        scope: ['meta.function-call', 'entity.name.function'],
        settings: {
          foreground: SolarizedColor.Blue.color
        }
      },
      {
        name: 'keyword',
        scope: [
          'keyword',
          'keyword.operator.new',
          'storage',
          'variable.language',
          'support.type.builtin',
          'constant.language',
          'support.type.primitive'
        ],
        settings: {
          fontStyle: '',
          foreground: SolarizedColor.Magenta.color
        }
      },
      {
        name: 'primitives',
        scope: ['constant.numeric'],
        settings: {
          foreground: SolarizedColor.Orange.color
        }
      },
      {
        name: 'property',
        scope: [
          'variable.other.property',
          'variable.other.object.property',
          'meta.field.declaration'
        ],
        settings: {
          foreground: SolarizedColor.Violet.color
        }
      },
      {
        name: 'punctuation',
        scope: [
          'keyword.operator',
          'punctuation.accessor',
          'punctuation.terminator',
          'punctuation.separator',
          'punctuation.definition.entity.css'
        ],
        settings: {
          foreground: SolarizedColor.Yellow.color,
          fontStyle: 'bold'
        }
      },
      {
        name: 'string',
        scope: ['string'],
        settings: {
          foreground: SolarizedColor.Cyan.color
        }
      },
      {
        name: 'variable.parameter',
        scope: ['variable.parameter'],
        settings: {
          foreground: SolarizedColor.Violet.color,
          fontStyle: ''
        }
      },
      ...this.generateCommentsTokenColors()
    ];
  }
  private generateCommentsTokenColors() {
    return [
      {
        name: 'comment',
        scope: ['comment'],
        settings: {
          foreground: this.colorPalette.syntax.comments
        }
      },
      {
        name: 'comment.tag',
        scope: [
          'storage.type.class.jsdoc',
          'punctuation.definition.block.tag.jsdoc'
        ],
        settings: {
          foreground: this.colorPalette.syntax.comments,
          fontStyle: 'bold'
        }
      },
      {
        name: 'comment.variableType',
        scope: ['entity.name.type.instance.jsdoc'],
        settings: {
          foreground: this.colorPalette.syntax.comments,
          fontStyle: 'italic'
        }
      }
    ];
  }
}
