import { ColorsGenerator } from "./colors-generator";
import { SolarizedColor } from "./solarized-color";

export class SemanticTokenColorGenerator extends ColorsGenerator {
  generate(): Object {
    return {
      class: SolarizedColor.Green,
      comment: this.isGeneratingLightTheme
        ? SolarizedColor.Base1
        : SolarizedColor.Base01,
      decorator: SolarizedColor.Orange,
      enum: SolarizedColor.Green,
      enumMember: SolarizedColor.Violet,
      event: SolarizedColor.Orange,
      function: { foreground: SolarizedColor.Blue, bold: false },
      interface: {
        italic: true,
        foreground: SolarizedColor.Green,
      },
      keyword: SolarizedColor.Magenta,
      method: { foreground: SolarizedColor.Blue, bold: false },
      namespace: SolarizedColor.Green,
      number: SolarizedColor.Orange,
      operator: SolarizedColor.Yellow,
      parameter: {},
      property: { foreground: SolarizedColor.Violet, bold: false },
      regexp: SolarizedColor.Orange,
      string: SolarizedColor.Cyan,
      typeParameter: {
        foreground: SolarizedColor.Cyan,
        italic: true,
        bold: true,
      },
      variable: SolarizedColor.Violet,
      "*.readonly": {
        underline: true,
      },
    };
  }
}
