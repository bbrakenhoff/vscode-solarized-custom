export const base = [ //  General colors
    {
        settings: {
            foreground: "#657b83ff",
            background: "#fdf6e3ff"
        }
    },
    {
        name: "abstractClassesInterfaces",
        scope: [
            "entity.name.type.interface"
        ],
        settings: {
            "foreground": "#859900",
            "fontStyle": "italic"
        }
    },
    {
        name: "bracesParenthesesOperators",
        scope: [
            "punctuation.definition",
            "meta.brace.round.ts",
            "meta.brace.square.ts"
        ],
        settings: {
            "fontStyle": "normal",
            "foreground": "#93a1a1"
        }
    },
    {
        name: "classes",
        scope: [
            "entity.name.type",
            "entity.other.inherited-class",
            "storage.type.java"
        ],
        settings: {
            "foreground": "#859900",
            "fontStyle": "normal"
        }
    },
    {
        "name": "comments",
        "scope": [
            "comment",
            "comment.block.documentation",
            "punctuation.definition.comment",
            "punctuation.definition.comment.php"
        ],
        "settings": {
            "foreground": "#93a1a1"
        }
    },
    {
        "name": "commentTags",
        "scope": [
            "storage.type.class.jsdoc",
            "punctuation.definition.block.tag.jsdoc"
        ],
        "settings": {
            "foreground": "#93a1a1",
            "fontStyle": "bold"
        }
    },
    {
        "name": "commentVariableType",
        "scope": [
            "entity.name.type.instance.jsdoc"
        ],
        "settings": {
            "foreground": "#93a1a1",
            "fontStyle": "italic"
        }
    },
    {
        "name": "functionNames",
        "scope": [
            "support.function",
            "entity.name.function"
        ],
        "settings": {
            "fontStyle": "normal",
            "foreground": "#268bd2"
        }
    },
    {
        "name": "functionArguments",
        "scope": [
            "variable.parameter"
        ],
        "settings": {
            "fontStyle": "italic"
        }
    },
    {
        "name": "keywords",
        "scope": [
            "keyword",
            "storage.type",
            "storage.modifier",
            "constant.language.boolean",
            "variable.language.this",
            "keyword.operator.new",
            "constant.language.null",
            "constant.language.json",
            "keyword.operator.expression.of.ts",
            "keyword.operator.expression.in.ts",
            "keyword.operator.expression.instanceof",
            "keyword.operator.expression.typeof",
            "constant.language.undefined",
            "variable.language.super"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "#d33682"
        }
    },
    {
        "name": "instanceFields",
        "scope": [
            "variable.other.property",
            "variable.other.object.property",
            "meta.field.declaration"
        ],
        "settings": {
            "foreground": "#6c71c4"
        }
    },
    {
        "name": "numbers",
        "scope": [
            "constant.numeric"
        ],
        "settings": {
            "foreground": "#b58900"
        }
    },
    {
        "name": "primitives",
        "scope": [
            "support.type.primitive"
        ],
        "settings": {
            "foreground": "#cb4b16"
        }
    },
    {
        "name": "punctuation",
        "scope": [
            "keyword.operator",
            "punctuation.accessor",
            "punctuation.terminator.statement.ts",
            "punctuation.separator"
        ],
        "settings": {
            "foreground": "#b58900",
            "fontStyle": "bold"
        }
    },
    {
        "name": "strings",
        "scope": [
            "string.quoted.single",
            "string.quoted.double",
            "string.template"
        ],
        "settings": {
            "foreground": "#2aa198"
        }
    }
];
export const css = [
    {
        "name": "CSS.classes",
        "scope": [
            "entity.other.attribute-name.class.css"
        ],
        "settings": {
            "foreground": "#859900",
            "fontStyle": "normal"
        }
    },
    {
        "name": "CSS.id",
        "scope": [
            "entity.other.attribute-name.id.css"
        ],
        "settings": {
            "foreground": "#b58900",
            "fontStyle": "bold"
        }
    },
    {
        "name": "CSS.mediaRule",
        "scope": [
            "support.constant.media.css",
            "keyword.operator.logical.scss"
        ],
        "settings": {
            "fontStyle": "italic"
        }
    },
    {
        "name": "CSS.propertyValue",
        "scope": [
            "support.constant.property-value.css"
        ],
        "settings": {
            "foreground": "#cb4b16"
        }
    },
    {
        "name": "CSS.pseudoElementsPseudoClasses",
        "scope": [
            "entity.other.attribute-name.pseudo-element.css",
            "entity.other.attribute-name.pseudo-class.css"
        ],
        "settings": {
            "fontStyle": "bold"
        }
    },
    {
        "name": "CSS.units",
        "scope": [
            "keyword.other.unit"
        ],
        "settings": {
            "foreground": "#93a1a1",
            "fontStyle": "normal"
        }
    },
    // SCSS/SASS
    {
        "name": "SCSS.nestedClasses",
        "scope": [
            "punctuation.definition.entity.css"
        ],
        "settings": {
            "foreground": "#859900"
        }
    },
    {
        "name": "SCSS.mixins",
        "scope": [
            "entity.name.function.scss"
        ],
        "settings": {
            "fontStyle": "italic"
        }
    },
    {
        "name": "SCSS.variable",
        "scope": "variable.scss",
        "settings": {
            "foreground": "#6c71c4"
        }
    },
];
export const html = [{
    "name": "HTML.XML.content",
    "scope": ["text.html.derivative"],
    "settings": {
        "foreground": "#b58900"
    }
},
{
    "name": "HTML.XML.specialChar",
    "scope": ["constant.character.entity.named.nbsp.html"],
    "settings": {
        "foreground": "#859900",
        "fontStyle": "bold"
    }
},
{
    "name": "HTML.XML.tag",
    "scope": [
        "punctuation.definition.tag"
    ],
    "settings": {
        "foreground": "#268bd2"
    }
},
{
    "name": "HTML.XML.tagName",
    "scope": [
        "entity.name.tag"
    ],
    "settings": {
        "foreground": "#d33682"
    }
},
{
    "name": "HTML.XML.attribute",
    "scope": [
        "entity.other.attribute-name"
    ],
    "settings": {
        "foreground": "#6c71c4",
        "fontStyle": "bold"
    }
},
{
    "name": "HTML.XML.attributeSeparator",
    "scope": ["punctuation.separator.key-value.html"],
    "settings": {
        "foreground": "#268bd2"
    }
},];
export const json = [{
    "name": "JSON.quotes",
    "scope": [
        "punctuation.definition.string.begin.json",
        "punctuation.definition.string.end.json",
        "punctuation.support.type.property-name.begin.json",
        "punctuation.support.type.property-name.end.json"
    ],
    "settings": {
        "foreground": "#b58900"
    }
},
{
    "name": "JSON.propertyName",
    "scope": [
        "support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#6c71c4"
    }
},]
export const php = [  // PHP
    {
        "name": "PHP.tag",
        "scope": [
            "punctuation.section.embedded.begin.php",
            "punctuation.section.embedded.end.php"
        ],
        "settings": {
            "foreground": "#cb4b16",
            "fontStyle": "italic"
        }
    }];