import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class SemanticTokenColorSet extends ColorSet {
  propertiesAll() {
    return {
      class: SolarizedColor.Green.color.hexa(),
      comment: this.colorPalette.syntax.comments,
      decorator: SolarizedColor.Orange.color.hexa(),
      enum: SolarizedColor.Green.color.hexa(),
      enumMember: SolarizedColor.Violet.color.hexa(),
      event: SolarizedColor.Orange.color.hexa(),
      function: { foreground: SolarizedColor.Blue.color.hexa(), bold: false },
      interface: {
        italic: true,
        foreground: SolarizedColor.Green.color.hex()
      },
      keyword: SolarizedColor.Magenta.color.hexa(),
      method: { foreground: SolarizedColor.Blue.color.hexa(), bold: false },
      namespace: SolarizedColor.Green.color.hexa(),
      number: SolarizedColor.Orange.color.hexa(),
      operator: SolarizedColor.Yellow.color.hexa(),
      parameter: {},
      property: { foreground: SolarizedColor.Violet.color.hexa(), bold: false },
      regexp: SolarizedColor.Orange.color.hexa(),
      string: SolarizedColor.Cyan.color.hexa(),
      typeParameter: {
        foreground: SolarizedColor.Cyan.color.hexa(),
        italic: true,
        bold: true
      },
      variable: SolarizedColor.Violet.color.hexa(),
      '*.readonly': {
        underline: true
      }
    };
  }
}
