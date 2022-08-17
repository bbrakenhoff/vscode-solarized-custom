import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class SemanticTokenColorSet extends ColorSet {
  propertiesAll() {
    return {
      class: SolarizedColor.Green.color.hex(),
      comment: this.colorPalette.syntax.comments,
      decorator: SolarizedColor.Orange.color.hex(),
      enum: SolarizedColor.Green.color.hex(),
      enumMember: SolarizedColor.Violet.color.hex(),
      event: SolarizedColor.Orange.color.hex(),
      function: { foreground: SolarizedColor.Blue.color.hex(), bold: false },
      interface: {
        italic: true,
        foreground: SolarizedColor.Green.color.hex()
      },
      keyword: SolarizedColor.Magenta.color.hex(),
      method: { foreground: SolarizedColor.Blue.color.hex(), bold: false },
      namespace: SolarizedColor.Green.color.hex(),
      number: SolarizedColor.Orange.color.hex(),
      operator: SolarizedColor.Yellow.color.hex(),
      parameter: {},
      property: { foreground: SolarizedColor.Violet.color.hex(), bold: false },
      regexp: SolarizedColor.Orange.color.hex(),
      string: SolarizedColor.Cyan.color.hex(),
      typeParameter: {
        foreground: SolarizedColor.Cyan.color.hex(),
        italic: true,
        bold: true
      },
      variable: SolarizedColor.Violet.color.hex(),
      '*.readonly': {
        underline: true
      }
    };
  }
}
