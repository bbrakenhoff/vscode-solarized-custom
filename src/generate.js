"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var solarized_color_1 = require("./solarized-color");
var ThemeGenerator = /** @class */ (function () {
    function ThemeGenerator() {
    }
    ThemeGenerator.generate = function () {
        return JSON.stringify(ThemeGenerator.build());
    };
    ThemeGenerator.build = function () {
        return {
            $schema: "vscode://schemas/color-theme",
            colors: ThemeGenerator.getWorkbenchColors(),
            semanticHighlighting: true,
            semanticTokenColors: ThemeGenerator.getSemanticTokenColors(),
            tokenColors: __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], ThemeGenerator.getBasicTokenColors(), true), ThemeGenerator.getJsonTokenColors(), true), ThemeGenerator.getCssTokenColors(), true), ThemeGenerator.getScssTokenColors(), true), ThemeGenerator.getHtmlAndXmlTokenColors(), true)
        };
    };
    ThemeGenerator.getWorkbenchColors = function () {
        return {
            "activityBar.background": solarized_color_1.SolarizedColor.base3,
            "activityBar.border": "#ddd6c1",
            "activityBar.foreground": "#292928",
            "activityBar.inactiveForeground": "#767676",
            "activityBarBadge.background": solarized_color_1.SolarizedColor.magenta,
            "activityBarBadge.foreground": "#FFFCF5",
            "badge.background": "#b58900aa",
            "breadcrumb.background": solarized_color_1.SolarizedColor.base3,
            "breadcrumbPicker.background": "#d3cbb790",
            "button.background": "#d3368299",
            "dropdown.background": solarized_color_1.SolarizedColor.base2,
            "dropdown.border": "#d3368299",
            "editor.background": solarized_color_1.SolarizedColor.base3,
            "editor.foreground": solarized_color_1.SolarizedColor.base00,
            "editor.lineHighlightBackground": solarized_color_1.SolarizedColor.base2,
            "editor.selectionBackground": solarized_color_1.SolarizedColor.base2,
            "editor.wordHighlightBackground": "#93a1a130",
            "editor.wordHighlightBorder": "#ccc4b0",
            "editor.wordHighlightStrongBackground": "#93a1a130",
            "editor.wordHighlightStrongBorder": "#ccc4b0",
            "editorBracketHighlight.foreground1": solarized_color_1.SolarizedColor.yellow,
            "editorBracketHighlight.foreground2": solarized_color_1.SolarizedColor.orange,
            "editorBracketHighlight.foreground3": solarized_color_1.SolarizedColor.violet,
            "editorBracketHighlight.foreground4": solarized_color_1.SolarizedColor.blue,
            "editorBracketHighlight.foreground5": solarized_color_1.SolarizedColor.cyan,
            "editorBracketHighlight.foreground6": solarized_color_1.SolarizedColor.green,
            "editorBracketMatch.background": "#93a1a150",
            "editorBracketMatch.border": "#ccc4b0",
            "editorCursor.foreground": solarized_color_1.SolarizedColor.magenta,
            "editorGroup.border": "#ddd6c1",
            "editorGroup.dropBackground": "#ddd6c1AA",
            "editorGroupHeader.tabsBackground": "#ddd6c150",
            "editorHoverWidget.background": "#ccc4b0",
            "editorIndentGuide.background": "#93a1a150",
            "editorLineNumber.foreground": "#657b8380",
            "editorLineNumber.activeForeground": solarized_color_1.SolarizedColor.base00,
            "editorWidget.background": solarized_color_1.SolarizedColor.base2,
            "editorWhitespace.foreground": "#93a1a144",
            errorForeground: "#ffeaea",
            focusBorder: "#d3af86",
            "selection.background": "#ccc4b0",
            "input.background": "#fff9e8",
            "input.foreground": solarized_color_1.SolarizedColor.base01,
            "input.placeholderForeground": "#586e75aa",
            "inputOption.activeBorder": "#d3af86",
            "list.activeSelectionBackground": "#D1CBB8",
            "list.activeSelectionForeground": "#6C6C6C",
            "list.focusBackground": "#D1CBB895",
            "list.hoverBackground": "#D1CBB880",
            "list.inactiveSelectionBackground": "#D1CBB890",
            "list.highlightForeground": solarized_color_1.SolarizedColor.magenta,
            "panel.border": "#ddd6c1",
            "panelTitle.activeBorder": solarized_color_1.SolarizedColor.magenta,
            "peekViewResult.background": solarized_color_1.SolarizedColor.base2,
            "peekViewEditor.background": "#FFFBF2",
            "peekViewTitle.background": solarized_color_1.SolarizedColor.base2,
            "peekView.border": solarized_color_1.SolarizedColor.yellow,
            "peekViewEditor.matchHighlightBackground": "#93a1a150",
            "peekViewEditor.matchHighlightBorder": "#ccc4b0",
            "progressBar.background": solarized_color_1.SolarizedColor.yellow,
            "sideBar.background": solarized_color_1.SolarizedColor.base3,
            "sideBar.border": "#ddd6c1",
            "sideBarTitle.foreground": solarized_color_1.SolarizedColor.base01,
            "statusBar.background": solarized_color_1.SolarizedColor.base2,
            "statusBar.debuggingBackground": solarized_color_1.SolarizedColor.base2,
            "statusBar.foreground": "#292928",
            "statusBar.noFolderBackground": solarized_color_1.SolarizedColor.base2,
            "statusBarItem.prominentBackground": "#ddd6c1",
            "statusBarItem.prominentHoverBackground": "#ddd6c199",
            "tab.activeBackground": solarized_color_1.SolarizedColor.base3,
            "tab.activeBorderTop": solarized_color_1.SolarizedColor.magenta,
            "tab.activeForeground": solarized_color_1.SolarizedColor.base01,
            "tab.border": "#ddd6c1",
            "tab.inactiveBackground": "#d3cbb790",
            "tab.inactiveForeground": solarized_color_1.SolarizedColor.base01,
            "titleBar.activeBackground": solarized_color_1.SolarizedColor.base2,
            "debugToolBar.background": "#ddd6c1",
            "debugExceptionWidget.background": "#ddd6c1",
            "debugExceptionWidget.border": "#AB395B",
            "pickerGroup.border": "#2AA19899",
            "pickerGroup.foreground": "#2AA19899",
            "extensionButton.prominentBackground": solarized_color_1.SolarizedColor.yellow,
            "extensionButton.prominentHoverBackground": "#584c27aa",
            "terminal.ansiBlack": solarized_color_1.SolarizedColor.base02,
            "terminal.ansiRed": solarized_color_1.SolarizedColor.red,
            "terminal.ansiGreen": solarized_color_1.SolarizedColor.green,
            "terminal.ansiYellow": solarized_color_1.SolarizedColor.yellow,
            "terminal.ansiBlue": solarized_color_1.SolarizedColor.blue,
            "terminal.ansiMagenta": solarized_color_1.SolarizedColor.magenta,
            "terminal.ansiCyan": solarized_color_1.SolarizedColor.cyan,
            "terminal.ansiWhite": solarized_color_1.SolarizedColor.base2,
            "terminal.ansiBrightBlack": solarized_color_1.SolarizedColor.base01,
            "terminal.ansiBrightRed": solarized_color_1.SolarizedColor.orange,
            "terminal.ansiBrightGreen": solarized_color_1.SolarizedColor.base01,
            "terminal.ansiBrightYellow": solarized_color_1.SolarizedColor.base00,
            "terminal.ansiBrightBlue": solarized_color_1.SolarizedColor.base0,
            "terminal.ansiBrightMagenta": solarized_color_1.SolarizedColor.violet,
            "terminal.ansiBrightCyan": solarized_color_1.SolarizedColor.base1,
            "terminal.ansiBrightWhite": solarized_color_1.SolarizedColor.base3
        };
    };
    ThemeGenerator.getSemanticTokenColors = function () {
        return {
            "class": solarized_color_1.SolarizedColor.green,
            comment: solarized_color_1.SolarizedColor.base1,
            decorator: solarized_color_1.SolarizedColor.orange,
            "enum": solarized_color_1.SolarizedColor.green,
            enumMember: solarized_color_1.SolarizedColor.violet,
            event: solarized_color_1.SolarizedColor.orange,
            "function": { foreground: solarized_color_1.SolarizedColor.blue, bold: false },
            interface: {
                italic: true,
                foreground: solarized_color_1.SolarizedColor.green
            },
            keyword: solarized_color_1.SolarizedColor.magenta,
            method: { foreground: solarized_color_1.SolarizedColor.blue, bold: false },
            namespace: solarized_color_1.SolarizedColor.green,
            number: solarized_color_1.SolarizedColor.orange,
            operator: solarized_color_1.SolarizedColor.yellow,
            parameter: {},
            property: { foreground: solarized_color_1.SolarizedColor.violet, bold: false },
            regexp: solarized_color_1.SolarizedColor.orange,
            string: solarized_color_1.SolarizedColor.cyan,
            typeParameter: {
                foreground: solarized_color_1.SolarizedColor.cyan,
                italic: true,
                bold: true
            },
            variable: solarized_color_1.SolarizedColor.violet,
            "*.readonly": {
                underline: true
            }
        };
    };
    ThemeGenerator.getBasicTokenColors = function () {
        return [
            {
                name: "class",
                scope: ["entity.name.type", "entity.name.type.class"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.green
                }
            },
            {
                name: "comment",
                scope: ["comment"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.base1
                }
            },
            {
                name: "comment.tag",
                scope: [
                    "storage.type.class.jsdoc",
                    "punctuation.definition.block.tag.jsdoc",
                ],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.base1,
                    fontStyle: "bold"
                }
            },
            {
                name: "comment.variableType",
                scope: ["entity.name.type.instance.jsdoc"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.base1,
                    fontStyle: "italic"
                }
            },
            {
                name: "decorator",
                scope: ["meta.decorator"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.orange
                }
            },
            {
                name: "function",
                scope: ["meta.function-call", "entity.name.function"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.blue
                }
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
                    foreground: solarized_color_1.SolarizedColor.magenta
                }
            },
            {
                name: "primitives",
                scope: ["constant.numeric"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.orange
                }
            },
            {
                name: "property",
                scope: [
                    "variable.other.property",
                    "variable.other.object.property",
                    "meta.field.declaration",
                ],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.violet
                }
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
                    foreground: solarized_color_1.SolarizedColor.yellow,
                    fontStyle: "bold"
                }
            },
            {
                name: "string",
                scope: "string",
                settings: {
                    foreground: solarized_color_1.SolarizedColor.cyan
                }
            },
            {
                name: "variable.parameter",
                scope: "variable.parameter",
                settings: {
                    foreground: solarized_color_1.SolarizedColor.violet,
                    fontStyle: ""
                }
            },
        ];
    };
    ThemeGenerator.getJsonTokenColors = function () {
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
                    foreground: solarized_color_1.SolarizedColor.yellow
                }
            },
            {
                name: "JSON.propertyName",
                scope: ["support.type.property-name.json"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.violet
                }
            },
        ];
    };
    ThemeGenerator.getCssTokenColors = function () {
        return [
            {
                name: "CSS.class",
                scope: ["entity.other.attribute-name.class.css"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.green
                }
            },
            {
                name: "CSS.id",
                scope: ["entity.other.attribute-name.id.css"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.green,
                    fontStyle: "bold"
                }
            },
            {
                name: "CSS.mediaRule",
                scope: ["support.constant.media.css", "keyword.operator.logical.scss"],
                settings: {
                    fontStyle: "italic"
                }
            },
            {
                name: "CSS.propertyValue",
                scope: ["support.constant.property-value.css"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.orange
                }
            },
            {
                name: "CSS.pseudoElement/CSS.pseudoClass",
                scope: [
                    "entity.other.attribute-name.pseudo-element.css",
                    "entity.other.attribute-name.pseudo-class.css",
                ],
                settings: {
                    fontStyle: "italic",
                    foreground: solarized_color_1.SolarizedColor.magenta
                }
            },
            {
                name: "CSS.tag",
                scope: "entity.name.tag.css",
                settings: {
                    foreground: solarized_color_1.SolarizedColor.magenta
                }
            },
            {
                name: "CSS.unit",
                scope: ["keyword.other.unit"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.yellow
                }
            },
        ];
    };
    ThemeGenerator.getScssTokenColors = function () {
        return [
            {
                name: "SCSS.abstractClass",
                scope: "entity.other.attribute-name.placeholder.css",
                settings: {
                    foreground: solarized_color_1.SolarizedColor.green,
                    fontStyle: "italic"
                }
            },
            {
                name: "SCSS.nestedClass",
                scope: ["entity.other.attribute-name.class.css"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.green
                }
            },
            {
                name: "SCSS.mixin",
                scope: ["entity.name.function.scss"],
                settings: {
                    fontStyle: "italic"
                }
            },
            {
                name: "SCSS.supportFunction",
                scope: "support.function.misc.scss",
                settings: {
                    foreground: solarized_color_1.SolarizedColor.blue,
                    fontStyle: "italic"
                }
            },
            {
                name: "SCSS.variable",
                scope: "variable.scss",
                settings: {
                    foreground: solarized_color_1.SolarizedColor.violet
                }
            },
        ];
    };
    ThemeGenerator.getHtmlAndXmlTokenColors = function () {
        return [
            {
                name: "HTML+XML.attribute",
                scope: ["entity.other.attribute-name"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.violet
                }
            },
            {
                name: "HTML+XML.attributeSeparator",
                scope: ["punctuation.separator.key-value.html"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.blue
                }
            },
            {
                name: "HTML+XML.content",
                scope: ["text.html.derivative"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.yellow
                }
            },
            {
                name: "HTML+XML.specialChar",
                scope: ["constant.character.entity.named.nbsp.html"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.green,
                    fontStyle: "bold"
                }
            },
            {
                name: "HTML+XML.tag",
                scope: ["punctuation.definition.tag"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.blue
                }
            },
            {
                name: "HTML+XML.tagName",
                scope: ["entity.name.tag"],
                settings: {
                    foreground: solarized_color_1.SolarizedColor.magenta
                }
            },
        ];
    };
    return ThemeGenerator;
}());
console.log(ThemeGenerator.generate());
