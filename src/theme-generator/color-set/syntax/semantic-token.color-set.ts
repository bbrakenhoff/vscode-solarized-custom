import { SolarizedColorEnum } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class SemanticTokenColorSet extends ColorSet {
  propertiesAll() {
    return {
      class: SolarizedColorEnum.Green,
      comment: this.colorPalette.syntax.comments,
      decorator: SolarizedColorEnum.Orange,
      enum: SolarizedColorEnum.Green,
      enumMember: SolarizedColorEnum.Violet,
      event: SolarizedColorEnum.Orange,
      function: { foreground: SolarizedColorEnum.Blue, bold: false },
      interface: {
        italic: true,
        foreground: SolarizedColorEnum.Green
      },
      keyword: SolarizedColorEnum.Magenta,
      method: { foreground: SolarizedColorEnum.Blue, bold: false },
      namespace: SolarizedColorEnum.Green,
      number: SolarizedColorEnum.Orange,
      operator: SolarizedColorEnum.Yellow,
      parameter: {},
      property: { foreground: SolarizedColorEnum.Violet, bold: false },
      regexp: SolarizedColorEnum.Orange,
      string: SolarizedColorEnum.Cyan,
      typeParameter: {
        foreground: SolarizedColorEnum.Cyan,
        italic: true,
        bold: true
      },
      variable: SolarizedColorEnum.Violet,
      '*.readonly': {
        underline: true
      }
    };
  }
}
