import { SolarizedColor } from "./solarized-color";

export class ThemeGenerator {
  static generate() {
    return JSON.stringify(ThemeGenerator.build());
  }
  private static build() {
    return {
      $schema: "vscode://schemas/color-theme",
      colors: ThemeGenerator.getWorkbenchColors(),
      semanticHighlighting: true,
      semanticTokenColors: ThemeGenerator.getSemanticTokenColors(),
      tokenColors: [
        ...ThemeGenerator.getBasicTokenColors(),
        ...ThemeGenerator.getJsonTokenColors(),
        ...ThemeGenerator.getCssTokenColors(),
        ...ThemeGenerator.getScssTokenColors(),
        ...ThemeGenerator.getHtmlAndXmlTokenColors(),
      ]
    };
  }
  private static getWorkbenchColors() {
    return {
      "activityBar.background": SolarizedColor.base3,
      "activityBar.border": "#ddd6c1",
      "activityBar.foreground": "#292928",
      "activityBar.inactiveForeground": "#767676",
      "activityBarBadge.background": SolarizedColor.magenta,
      "activityBarBadge.foreground": "#FFFCF5",
      "badge.background": "#b58900aa",
      "breadcrumb.background": SolarizedColor.base3,
      "breadcrumbPicker.background": "#d3cbb790",
      "button.background": "#d3368299",
      "dropdown.background": SolarizedColor.base2,
      "dropdown.border": "#d3368299",
      "editor.background": SolarizedColor.base3,
      "editor.foreground": SolarizedColor.base00,
      "editor.lineHighlightBackground": SolarizedColor.base2,
      "editor.selectionBackground": SolarizedColor.base2,
      "editor.wordHighlightBackground": "#93a1a130",
      "editor.wordHighlightBorder": "#ccc4b0",
      "editor.wordHighlightStrongBackground": "#93a1a130",
      "editor.wordHighlightStrongBorder": "#ccc4b0",
      "editorBracketHighlight.foreground1": SolarizedColor.yellow,
      "editorBracketHighlight.foreground2": SolarizedColor.orange,
      "editorBracketHighlight.foreground3": SolarizedColor.violet,
      "editorBracketHighlight.foreground4": SolarizedColor.blue,
      "editorBracketHighlight.foreground5": SolarizedColor.cyan,
      "editorBracketHighlight.foreground6": SolarizedColor.green,
      "editorBracketMatch.background": "#93a1a150",
      "editorBracketMatch.border": "#ccc4b0",
      "editorCursor.foreground": SolarizedColor.magenta,
      "editorGroup.border": "#ddd6c1",
      "editorGroup.dropBackground": "#ddd6c1AA",
      "editorGroupHeader.tabsBackground": "#ddd6c150",
      "editorHoverWidget.background": "#ccc4b0",
      "editorIndentGuide.background": "#93a1a150",
      "editorLineNumber.foreground": "#657b8380",
      "editorLineNumber.activeForeground": SolarizedColor.base00,
      "editorWidget.background": SolarizedColor.base2,
      "editorWhitespace.foreground": "#93a1a144",
      errorForeground: "#ffeaea",
      focusBorder: "#d3af86",
      "selection.background": "#ccc4b0",
      "input.background": "#fff9e8",
      "input.foreground": SolarizedColor.base01,
      "input.placeholderForeground": "#586e75aa",
      "inputOption.activeBorder": "#d3af86",
      "list.activeSelectionBackground": "#D1CBB8",
      "list.activeSelectionForeground": "#6C6C6C",
      "list.focusBackground": "#D1CBB895",
      "list.hoverBackground": "#D1CBB880",
      "list.inactiveSelectionBackground": "#D1CBB890",
      "list.highlightForeground": SolarizedColor.magenta,
      "panel.border": "#ddd6c1",
      "panelTitle.activeBorder": SolarizedColor.magenta,
      "peekViewResult.background": SolarizedColor.base2,
      "peekViewEditor.background": "#FFFBF2",
      "peekViewTitle.background": SolarizedColor.base2,
      "peekView.border": SolarizedColor.yellow,
      "peekViewEditor.matchHighlightBackground": "#93a1a150",
      "peekViewEditor.matchHighlightBorder": "#ccc4b0",
      "progressBar.background": SolarizedColor.yellow,
      "sideBar.background": SolarizedColor.base3,
      "sideBar.border": "#ddd6c1",
      "sideBarTitle.foreground": SolarizedColor.base01,
      "statusBar.background": SolarizedColor.base2,
      "statusBar.debuggingBackground": SolarizedColor.base2,
      "statusBar.foreground": "#292928",
      "statusBar.noFolderBackground": SolarizedColor.base2,
      "statusBarItem.prominentBackground": "#ddd6c1",
      "statusBarItem.prominentHoverBackground": "#ddd6c199",
      "tab.activeBackground": SolarizedColor.base3,
      "tab.activeBorderTop": SolarizedColor.magenta,
      "tab.activeForeground": SolarizedColor.base01,
      "tab.border": "#ddd6c1",
      "tab.inactiveBackground": "#d3cbb790",
      "tab.inactiveForeground": SolarizedColor.base01,
      "titleBar.activeBackground": SolarizedColor.base2,
      "debugToolBar.background": "#ddd6c1",
      "debugExceptionWidget.background": "#ddd6c1",
      "debugExceptionWidget.border": "#AB395B",
      "pickerGroup.border": "#2AA19899",
      "pickerGroup.foreground": "#2AA19899",
      "extensionButton.prominentBackground": SolarizedColor.yellow,
      "extensionButton.prominentHoverBackground": "#584c27aa",
      "terminal.ansiBlack": SolarizedColor.base02,
      "terminal.ansiRed": SolarizedColor.red,
      "terminal.ansiGreen": SolarizedColor.green,
      "terminal.ansiYellow": SolarizedColor.yellow,
      "terminal.ansiBlue": SolarizedColor.blue,
      "terminal.ansiMagenta": SolarizedColor.magenta,
      "terminal.ansiCyan": SolarizedColor.cyan,
      "terminal.ansiWhite": SolarizedColor.base2,
      "terminal.ansiBrightBlack": SolarizedColor.base01,
      "terminal.ansiBrightRed": SolarizedColor.orange,
      "terminal.ansiBrightGreen": SolarizedColor.base01,
      "terminal.ansiBrightYellow": SolarizedColor.base00,
      "terminal.ansiBrightBlue": SolarizedColor.base0,
      "terminal.ansiBrightMagenta": SolarizedColor.violet,
      "terminal.ansiBrightCyan": SolarizedColor.base1,
      "terminal.ansiBrightWhite": SolarizedColor.base3,
    };
  }

  private static getSemanticTokenColors() {
    return {
      class: SolarizedColor.green,
      comment: SolarizedColor.base1,
      decorator: SolarizedColor.orange,
      enum: SolarizedColor.green,
      enumMember: SolarizedColor.violet,
      event: SolarizedColor.orange,
      function: { foreground: SolarizedColor.blue, bold: false },
      interface: {
        italic: true,
        foreground: SolarizedColor.green,
      },
      keyword: SolarizedColor.magenta,
      method: { foreground: SolarizedColor.blue, bold: false },
      namespace: SolarizedColor.green,
      number: SolarizedColor.orange,
      operator: SolarizedColor.yellow,
      parameter: {},
      property: { foreground: SolarizedColor.violet, bold: false },
      regexp: SolarizedColor.orange,
      string: SolarizedColor.cyan,
      typeParameter: {
        foreground: SolarizedColor.cyan,
        italic: true,
        bold: true,
      },
      variable: SolarizedColor.violet,
      "*.readonly": {
        underline: true,
      },
    };
  }

  private static getBasicTokenColors() {
    return [
      {
        name: "class",
        scope: ["entity.name.type", "entity.name.type.class"],
        settings: {
          foreground: SolarizedColor.green,
        },
      },
      {
        name: "comment",
        scope: ["comment"],
        settings: {
          foreground: SolarizedColor.base1,
        },
      },
      {
        name: "comment.tag",
        scope: [
          "storage.type.class.jsdoc",
          "punctuation.definition.block.tag.jsdoc",
        ],
        settings: {
          foreground: SolarizedColor.base1,
          fontStyle: "bold",
        },
      },
      {
        name: "comment.variableType",
        scope: ["entity.name.type.instance.jsdoc"],
        settings: {
          foreground: SolarizedColor.base1,
          fontStyle: "italic",
        },
      },
      {
        name: "decorator",
        scope: ["meta.decorator"],
        settings: {
          foreground: SolarizedColor.orange,
        },
      },
      {
        name: "function",
        scope: ["meta.function-call", "entity.name.function"],
        settings: {
          foreground: SolarizedColor.blue,
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
          foreground: SolarizedColor.magenta,
        },
      },
      {
        name: "primitives",
        scope: ["constant.numeric"],
        settings: {
          foreground: SolarizedColor.orange,
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
          foreground: SolarizedColor.violet,
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
          foreground: SolarizedColor.yellow,
          fontStyle: "bold",
        },
      },
      {
        name: "string",
        scope: "string",
        settings: {
          foreground: SolarizedColor.cyan,
        },
      },
      {
        name: "variable.parameter",
        scope: "variable.parameter",
        settings: {
          foreground: SolarizedColor.violet,
          fontStyle: "",
        },
      },
    ];
  }

  private static getJsonTokenColors() {
    return [
      {
        name: "JSON.quotes",
        scope: [
          "punctuation.definition.string.begin.json",
          "punctuation.definition.string.end.json",
          "punctuation.support.type.property-name.begin.json",
          "punctuation.support.type.property-name.end.json",
        ],
        settings: {
          foreground: SolarizedColor.yellow,
        },
      },
      {
        name: "JSON.propertyName",
        scope: ["support.type.property-name.json"],
        settings: {
          foreground: SolarizedColor.violet,
        },
      },
    ];
  }

  private static getCssTokenColors() {
    return [
      {
        name: "CSS.class",
        scope: ["entity.other.attribute-name.class.css"],
        settings: {
          foreground: SolarizedColor.green,
        },
      },
      {
        name: "CSS.id",
        scope: ["entity.other.attribute-name.id.css"],
        settings: {
          foreground: SolarizedColor.green,
          fontStyle: "bold",
        },
      },
      {
        name: "CSS.mediaRule",
        scope: ["support.constant.media.css", "keyword.operator.logical.scss"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "CSS.propertyValue",
        scope: ["support.constant.property-value.css"],
        settings: {
          foreground: SolarizedColor.orange,
        },
      },
      {
        name: "CSS.pseudoElement/CSS.pseudoClass",
        scope: [
          "entity.other.attribute-name.pseudo-element.css",
          "entity.other.attribute-name.pseudo-class.css",
        ],
        settings: {
          fontStyle: "italic",
          foreground: SolarizedColor.magenta,
        },
      },
      {
        name: "CSS.tag",
        scope: "entity.name.tag.css",
        settings: {
          foreground: SolarizedColor.magenta,
        },
      },
      {
        name: "CSS.unit",
        scope: ["keyword.other.unit"],
        settings: {
          foreground: SolarizedColor.yellow,
        },
      },
    ];
  }

  private static getScssTokenColors() {
    return [
      {
        name: "SCSS.abstractClass",
        scope: "entity.other.attribute-name.placeholder.css",
        settings: {
          foreground: SolarizedColor.green,
          fontStyle: "italic",
        },
      },
      {
        name: "SCSS.nestedClass",
        scope: ["entity.other.attribute-name.class.css"],
        settings: {
          foreground: SolarizedColor.green,
        },
      },
      {
        name: "SCSS.mixin",
        scope: ["entity.name.function.scss"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "SCSS.supportFunction",
        scope: "support.function.misc.scss",
        settings: {
          foreground: SolarizedColor.blue,
          fontStyle: "italic",
        },
      },
      {
        name: "SCSS.variable",
        scope: "variable.scss",
        settings: {
          foreground: SolarizedColor.violet,
        },
      },
    ];
  }

  private static getHtmlAndXmlTokenColors() {
    return [
      {
        name: "HTML+XML.attribute",
        scope: ["entity.other.attribute-name"],
        settings: {
          foreground: SolarizedColor.violet,
        },
      },
      {
        name: "HTML+XML.attributeSeparator",
        scope: ["punctuation.separator.key-value.html"],
        settings: {
          foreground: SolarizedColor.blue,
        },
      },
      {
        name: "HTML+XML.content",
        scope: ["text.html.derivative"],
        settings: {
          foreground: SolarizedColor.yellow,
        },
      },
      {
        name: "HTML+XML.specialChar",
        scope: ["constant.character.entity.named.nbsp.html"],
        settings: {
          foreground: SolarizedColor.green,
          fontStyle: "bold",
        },
      },
      {
        name: "HTML+XML.tag",
        scope: ["punctuation.definition.tag"],
        settings: {
          foreground: SolarizedColor.blue,
        },
      },
      {
        name: "HTML+XML.tagName",
        scope: ["entity.name.tag"],
        settings: {
          foreground: SolarizedColor.magenta,
        },
      },
    ];
  }
}
