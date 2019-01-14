const gulp = require("gulp");
const del = require("del");
const merge = require("gulp-merge-json");
const jeditor = require("gulp-json-editor");
const json5 = require("gulp-json5-to-json");
const file = require("gulp-file");
const beautify = require("gulp-jsbeautifier");

let currentTheme = "";
const Paths = {
    src: {
        syntax: {
            base: "./src/syntax/base.json",
            languageSpecific: "./src/syntax/language/*.json",
            themeSpecific: ""
        },
        workbench: ""
    },
    dest: {
        themes: "./themes/",
        fileName: "",
        temp: {
            syntax: "./themes/syntax.json",
            workbench: ""
        }
    }
};;

function dynamicPaths(cb) {
    Paths.src.syntax.themeSpecific = `./src/syntax/workbench/${currentTheme}.json`;
    Paths.src.workbench = `./src/workbench/${currentTheme}.json`;
    Paths.dest.fileName = `solarized-custom-${currentTheme}.json`;
    Paths.dest.temp.workbench = `./themes/${currentTheme}.json`;

    cb();
}

const Theme = {
    Light: "light",
    Dark: "dark",
    ExtraDark: "extra-dark",
}

function cleanDest() {
    return del(Paths.dest.themes + Paths.fileName)
}

/**
 * Build JSON for syntax highlighting
 * @param {string} theme Name of the theme being build
 */
function syntaxColors() {
    return gulp.src([Paths.src.syntax.base, Paths.src.syntax.languageSpecific, Paths.src.syntax.themeSpecific])
        .pipe(json5({ beautify: true }))
        .pipe(merge({ startObj: [], endObj: [], concatArrays: true, fileName: "syntax.json" }))
        .pipe(gulp.dest(Paths.dest.themes));
}

/**
 * Delete duplicate items (by name) and make sure the last one is used,
 * the one from the theme that overrides the base
 */
function removeDuplicates() {
    return gulp.src(Paths.dest.temp.syntax)
        .pipe(jeditor(function (json) {

            json.forEach(function (value) {
                const entriesWithSameName = json.filter((entry) =>
                    entry.name && entry.name == value.name
                );

                if (entriesWithSameName.length > 1) {
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
        .pipe(gulp.dest(Paths.dest.themes));
}

/**
 * Build workbench colors for theme
 * @param {string} theme Name of the theme being build
 */
function buildWorkbenchColors() {
    return gulp.src(Paths.src.workbench)
        .pipe(json5({ beautify: true }))
        .pipe(gulp.dest(Paths.dest.themes))
}

/**
 * Cleanup the files created for syntax colors and workbench colors,
 * called after theme is generated
 * @param {string} theme Name of the theme being build
 */
function cleanTempFiles() {
    return del([Paths.dest.temp.workbench, Paths.dest.temp.syntax]);
}

/**
 * Combine the workbench colors with the syntax colors
 * and create a file according the format of a vscode theme
 */
function buildFullTheme() {
    const workbench = require(Paths.dest.temp.workbench);
    const syntax = require(Paths.dest.temp.syntax);
    const fullTheme = { type: "dark", colors: workbench, tokenColors: syntax }
    if (currentTheme === Theme.Light) {
        fullTheme.type = "light"
    }

    const json = JSON.stringify(fullTheme);
    return file(Paths.dest.fileName, json, { src: true })
        .pipe(beautify())
        .pipe(gulp.dest(Paths.dest.themes));
}

/**
 * Create full theme and concat all the tasks as series
 * @param {string} theme Name of the theme being build
 */
gulp.task("buildTheme", gulp.series(
    dynamicPaths,
    cleanDest,
    syntaxColors,
    removeDuplicates,
    buildWorkbenchColors,
    buildFullTheme,
    cleanTempFiles
));

gulp.task("build:light", gulp.series(function (cb) {
    currentTheme = Theme.Light;

    cb();
}, "buildTheme"));
gulp.task("build:dark", gulp.series(function (cb) {
    currentTheme = Theme.Dark;

    cb();
}, "buildTheme"));
gulp.task("build:extra-dark", gulp.series(function (cb) {
    currentTheme = Theme.ExtraDark;

    cb();
}, "buildTheme"));
gulp.task("build:all", gulp.parallel("build:light", "build:dark", "build:extra-dark"));

gulp.task("default", gulp.series("build:all"));
