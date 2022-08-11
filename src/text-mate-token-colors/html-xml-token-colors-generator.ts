import { ColorsGenerator } from "../colors-generator";
import { SolarizedColor } from "../solarized-color";

export class HtmlXmlTokenColorsGenerator extends ColorsGenerator {
  generate(): Object[] {
    return [
      {
        name: "HTML+XML.attribute",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: SolarizedColor.Violet,
        },
      },
      {
        name: "HTML+XML.attributeSeparator",
        scope: ["punctuation.separator.key-value.html"],
        settings: {
          foreground: SolarizedColor.Blue,
        },
      },
      {
        name: "HTML+XML.content",
        scope: ["text.html.derivative"],
        settings: {
          foreground: SolarizedColor.Yellow,
        },
      },
      {
        name: "HTML+XML.specialChar",
        scope: ["constant.character.entity.named.nbsp.html"],
        settings: {
          foreground: SolarizedColor.Green,
          fontStyle: "bold",
        },
      },
      {
        name: "HTML+XML.tag",
        scope: ["punctuation.definition.tag"],
        settings: {
          foreground: SolarizedColor.Blue,
        },
      },
      {
        name: "HTML+XML.tagName",
        scope: ["entity.name.tag"],
        settings: {
          foreground: SolarizedColor.Magenta,
        },
      },
    ];
  }
}
