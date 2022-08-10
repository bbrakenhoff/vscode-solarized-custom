import { SolarizedColor } from "../solarized-color";

export const generateBasicTokenColors = (useColorsLightTheme: boolean) => {
  return [
    {
      name: "class",
      scope: ["entity.name.type", "entity.name.type.class"],
      settings: {
        foreground: SolarizedColor.Green,
      },
    },
    {
      name: "comment",
      scope: ["comment"],
      settings: {
        foreground: useColorsLightTheme
          ? SolarizedColor.Base1
          : SolarizedColor.Base01,
      },
    },
    {
      name: "comment.tag",
      scope: [
        "storage.type.class.jsdoc",
        "punctuation.definition.block.tag.jsdoc",
      ],
      settings: {
        foreground: useColorsLightTheme
          ? SolarizedColor.Base1
          : SolarizedColor.Base01,
        fontStyle: "bold",
      },
    },
    {
      name: "comment.variableType",
      scope: ["entity.name.type.instance.jsdoc"],
      settings: {
        foreground: useColorsLightTheme
          ? SolarizedColor.Base1
          : SolarizedColor.Base01,
        fontStyle: "italic",
      },
    },
    {
      name: "decorator",
      scope: ["meta.decorator"],
      settings: {
        foreground: SolarizedColor.Orange,
      },
    },
    {
      name: "function",
      scope: ["meta.function-call", "entity.name.function"],
      settings: {
        foreground: SolarizedColor.Blue,
      },
    },
    {
      name: "keyword",
      scope: [
        "keyword",
        "keyword.operator.new",
        "storage",
        "variable.language",
        "support.type.builtin",
        "constant.language",
        "support.type.primitive",
      ],
      settings: {
        fontStyle: "",
        foreground: SolarizedColor.Magenta,
      },
    },
    {
      name: "primitives",
      scope: ["constant.numeric"],
      settings: {
        foreground: SolarizedColor.Orange,
      },
    },
    {
      name: "property",
      scope: [
        "variable.other.property",
        "variable.other.object.property",
        "meta.field.declaration",
      ],
      settings: {
        foreground: SolarizedColor.Violet,
      },
    },
    {
      name: "punctuation",
      scope: [
        "keyword.operator",
        "punctuation.accessor",
        "punctuation.terminator",
        "punctuation.separator",
        "punctuation.definition.entity.css",
      ],
      settings: {
        foreground: SolarizedColor.Yellow,
        fontStyle: "bold",
      },
    },
    {
      name: "string",
      scope: "string",
      settings: {
        foreground: SolarizedColor.Cyan,
      },
    },
    {
      name: "variable.parameter",
      scope: "variable.parameter",
      settings: {
        foreground: SolarizedColor.Violet,
        fontStyle: "",
      },
    },
  ];
};
