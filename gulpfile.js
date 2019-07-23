const gulp = require("gulp");
const del = require("del");
const rename = require("gulp-rename");
const merge = require("gulp-merge-json");
const jeditor = require("gulp-json-editor");
const json5 = require("gulp-json5-to-json");
const file = require("gulp-file");
const beautify = require("gulp-jsbeautifier");

let currentTheme = {
    workbenchColor: "",
    isItalic: false
};
const Paths = {
    src: {
        syntax: {
            base: "./src/syntax/base.json",
            italicScopeNames: "./src/syntax/italic.json",
            languageSpecific: "./src/syntax/language/*.json",
            themeSpecific: ""
        },
        workbench: "",
    },
    temp: {
        folder: "./temp/",
        syntax: "",
        workbench: ""
    },
    dest: {
        folder: "./themes/",
        fileName: "",
    }
};

const WorkbenchColor = {
    Light: "light",
    Dark: "dark",
    ExtraDark: "extra-dark",
};

function initDynamicBuildPaths(cb) {
    Paths.src.syntax.themeSpecific = `./src/syntax/theme/${currentTheme.workbenchColor}.json`;

    switch (currentTheme.workbenchColor) {
        case WorkbenchColor.ExtraDark:
            Paths.src.workbench = `./src/workbench/${WorkbenchColor.ExtraDark}.json`;
            break;
        case WorkbenchColor.Light:
            Paths.src.workbench = `./src/workbench/${WorkbenchColor.Light}.json`;
            break;
        case WorkbenchColor.Dark:
            Paths.src.workbench = `./src/workbench/${WorkbenchColor.Dark}.json`;
    }
    const italicPostfix = currentTheme.isItalic ? '-italic' : ''
    Paths.temp.workbench = `workbench-${currentTheme.workbenchColor}.json`;
    Paths.temp.syntax = `syntax-${currentTheme.workbenchColor}${italicPostfix}.json`
    Paths.dest.fileName = `solarized-custom-${currentTheme.workbenchColor}${italicPostfix}.json`;

    cb();
}

/**
 * Remove theme from themes folder before generating
 */
function cleanDest() {
    return del(Paths.dest.folder + Paths.dest.fileName)
}

/**
 * Build JSON for syntax highlighting
 * @param {string} theme Name of the theme being build
 */
function syntaxColors() {
    return gulp.src([Paths.src.syntax.base, Paths.src.syntax.languageSpecific, Paths.src.syntax.themeSpecific])
        .pipe(json5({ beautify: true }))
        .pipe(merge({ startObj: [], endObj: [], concatArrays: true, fileName: Paths.temp.syntax }))
        .pipe(gulp.dest(Paths.dest.folder + Paths.temp.folder));
}

/**
 * Delete duplicate items (by name) and make sure the last one is used,
 * the one from the theme that overrides the base
 */
function removeDuplicates() {
    return gulp.src(`./themes/temp/${Paths.temp.syntax}`)
        .pipe(jeditor(function (json) {
            json.forEach(function (value) {
                const entriesWithSameName = json.filter((entry) =>
                    entry.name && entry.name == value.name
                );

                if (entriesWithSameName.length > 1) {
                    process.stdout.write(entriesWithSameName);
                    const firstEntry = entriesWithSameName[0];
                    const lastEntry = entriesWithSameName[entriesWithSameName.length - 1];
                    firstEntry.settings = lastEntry.settings;

                    entriesWithSameName.shift();
                    json = json.filter((item) =>
                        entriesWithSameName.indexOf(item) === -1
                    )
                }
            });

            return json;
        }))
        .pipe(gulp.dest(Paths.dest.folder + Paths.temp.folder));
}

/**
 * Make items that are in the list of scope names italic
 */
function makeItalic() {
    if (!currentTheme.isItalic) {
        return gulp.src(Paths.dest.folder + Paths.temp.folder + Paths.temp.syntax)
            .pipe(gulp.dest(Paths.dest.folder + Paths.temp.folder));
    }

    const italicScopeNames = require(Paths.src.syntax.italicScopeNames);
    return gulp.src(Paths.dest.folder + Paths.temp.folder + Paths.temp.syntax)
        .pipe(jeditor(function (json) {
            json.forEach(function (value) {
                if (italicScopeNames.indexOf(value.name) > -1) {
                    if (value.settings.fontStyle){
                    value.settings.fontStyle += " italic";
                    } else {
                        value.settings.fontStyle="italic";
                    }
                }
            });

            return json;
        }))
        .pipe(gulp.dest(Paths.dest.folder + Paths.temp.folder));
}

/**
 * Build workbench colors for theme
 * @param {string} theme Name of the theme being build
 */
function buildWorkbenchColors() {
    return gulp.src(Paths.src.workbench)
        .pipe(json5({ beautify: true }))
        .pipe(rename(Paths.temp.workbench))
        .pipe(gulp.dest(Paths.dest.folder + Paths.temp.folder))
}

/**
 * Combine the workbench colors with the syntax colors
 * and create a file according the format of a vscode theme
 */
function combineThemeParts() {
    const workbench = require(Paths.dest.folder + Paths.temp.folder + Paths.temp.workbench);
    const syntax = require(Paths.dest.folder + Paths.temp.folder + Paths.temp.syntax);
    const fullTheme = { type: "dark", colors: workbench, tokenColors: syntax }
    if (currentTheme.workbenchColor === WorkbenchColor.Light) {
        fullTheme.type = "light"
    }

    const json = JSON.stringify(fullTheme);
    return file(Paths.dest.folder + Paths.dest.fileName, json, { src: true })
        .pipe(beautify())
        .pipe(gulp.dest("./"));
}

/**
 * Cleanup the files created for syntax colors and workbench colors,
 * called after theme is generated
 * @param {string} theme Name of the theme being build
 */
function cleanTempFiles() {
    return del(Paths.dest.folder + Paths.temp.folder);
}

/**
 * Create full theme and concat all the tasks as series
 * @param {string} theme Name of the theme being build
 */
gulp.task("buildTheme", gulp.series(
    initDynamicBuildPaths,
    cleanDest,
    syntaxColors,
    removeDuplicates,
    makeItalic,
    buildWorkbenchColors,
    combineThemeParts,
    cleanTempFiles
));

gulp.task("build:light", gulp.series(function (cb) {
    currentTheme.workbenchColor = WorkbenchColor.Light;
    currentTheme.isItalic = false;

    cb();
}, "buildTheme"));

gulp.task("build:light:italic", gulp.series(function (cb) {
    currentTheme.workbenchColor = WorkbenchColor.Light;
    currentTheme.isItalic = true;

    cb();
}, "buildTheme"));

gulp.task("build:dark", gulp.series(function (cb) {
    currentTheme.workbenchColor = WorkbenchColor.Dark;
    currentTheme.isItalic = false;

    cb();
}, "buildTheme"));

gulp.task("build:dark:italic", gulp.series(function (cb) {
    currentTheme.workbenchColor = WorkbenchColor.Dark;
    currentTheme.isItalic = true;

    cb();
}, "buildTheme"))

gulp.task("build:extra-dark", gulp.series(function (cb) {
    currentTheme.workbenchColor = WorkbenchColor.ExtraDark;
    currentTheme.isItalic = false;

    cb();
}, "buildTheme"));

gulp.task("build:extra-dark:italic", gulp.series(function (cb) {
    currentTheme.workbenchColor = WorkbenchColor.ExtraDark;
    currentTheme.isItalic = true;

    cb();
}, "buildTheme"));

gulp.task("build:all", gulp.series("build:light", "build:light:italic", "build:dark", "build:dark:italic", "build:extra-dark", "build:extra-dark:italic"));

gulp.task("default", gulp.series("build:all"));
