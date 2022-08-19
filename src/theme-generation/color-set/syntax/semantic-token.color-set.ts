import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class SemanticTokenColorSet extends ColorSet {
  propertiesAll() {
    return {
      class: SolarizedColor.Green.color,
      comment: this.colorPalette.syntax.comments,
      decorator: SolarizedColor.Orange.color,
      enum: SolarizedColor.Green.color,
      enumMember: SolarizedColor.Violet.color,
      event: SolarizedColor.Orange.color,
      function: { foreground: SolarizedColor.Blue.color, bold: false },
      interface: {
        italic: true,
        foreground: SolarizedColor.Green.color
      },
      keyword: SolarizedColor.Magenta.color,
      method: { foreground: SolarizedColor.Blue.color, bold: false },
      namespace: SolarizedColor.Green.color,
      number: SolarizedColor.Orange.color,
      operator: SolarizedColor.Yellow.color,
      parameter: {},
      property: { foreground: SolarizedColor.Violet.color, bold: false },
      regexp: SolarizedColor.Orange.color,
      string: SolarizedColor.Cyan.color,
      typeParameter: {
        foreground: SolarizedColor.Cyan.color,
        italic: true,
        bold: true
      },
      variable: SolarizedColor.Violet.color,
      '*.readonly': {
        underline: true
      }
    };
  }
}
