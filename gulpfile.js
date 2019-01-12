const gulp = require("gulp");
const del = require("del");
const merge = require("gulp-merge-json");
const jeditor = require("gulp-json-editor");
const json5 = require("gulp-json5-to-json");
const file = require("gulp-file");
const beautify = require("gulp-jsbeautifier");

const dest = "./themes/";

const Theme = {
    Light: "light",
    Dark: "dark",
    ExtraDark: "extra-dark",
}

function cleanDest() {
    return del([dest])
}

/**
 * Build JSON for syntax highlighting
 * @param {string} theme Name of the theme being build
 */
function syntaxColors(theme) {
    const base = "./src/syntax/base.json";
    const languages = "./src/syntax/language/*.json";
    const themeSpecific = "./src/syntax/workbench/" + theme + ".json";
    return gulp.src([base, languages, themeSpecific])
        .pipe(json5({ beautify: true }))
        .pipe(merge({ startObj: [], endObj: [], concatArrays: true, fileName: "syntax.json" }))
        .pipe(gulp.dest(dest));
}

/**
 * Delete duplicate items (by name) and make sure the last one is used,
 * the one from the theme that overrides the base
 */
function removeDuplicates() {
    return gulp.src(dest + "syntax.json")
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
        .pipe(gulp.dest(dest));
}

/**
 * Build workbench colors for theme
 * @param {string} theme Name of the theme being build
 */
function buildWorkbenchColors(theme) {
    return gulp.src("./src/workbench/" + theme + ".json")
        .pipe(json5({ beautify: true }))
        .pipe(gulp.dest(dest))
}

/**
 * Cleanup the files created for syntax colors and workbench colors,
 * called after theme is generated
 * @param {string} theme Name of the theme being build
 */
function cleanExtraFiles(theme) {
    return del([dest + theme + ".json", dest + "syntax.json"]);
}

/**
 * Combine the workbench colors with the syntax colors
 * and create a file according the format of a vscode theme
 */
function buildFullTheme(theme) {
    const workbench = require(dest + theme + ".json");
    const syntax = require(dest + "syntax.json");
    const fullTheme = { type: "dark", colors: workbench, tokenColors: syntax }
    if (theme === Theme.Light) {
        fullTheme.type = "light"
    }

    const json = JSON.stringify(fullTheme);
    const outputfile = "solarized-custom-" + theme + ".json";

    return file(outputfile, json, { src: true })
        .pipe(beautify())
        .pipe(gulp.dest(dest));
}

/**
 * Create full theme and concat all the tasks as series
 * @param {string} theme Name of the theme being build
 */
function buildTheme(theme) {
    return gulp.series(
        () => syntaxColors(theme),
        removeDuplicates,
        () => buildWorkbenchColors(theme),
        () => buildFullTheme(theme),
        () => cleanExtraFiles(theme)
    );
}
// gulp.task("buildTheme", (theme) => {
//     gulp.series(
//         () => buildSyntaxColors(theme),
//         removeDuplicates,
//         buildWorkbenchColors,
//         "buildFullTheme",
//         cleanExtraFiles
//     );
// });

gulp.task("build:light", gulp.series(cleanDest, gulp.parallel(buildTheme(Theme.Light))));
gulp.task("build:dark", gulp.series(cleanDest, gulp.parallel(buildTheme(Theme.Dark))));
gulp.task("build:extra-dark", gulp.series(cleanDest, gulp.parallel(buildTheme(Theme.ExtraDark))));
gulp.task("build:all", gulp.series(cleanDest, gulp.parallel(
    buildTheme(Theme.Light),
    buildTheme(Theme.Dark),
    buildTheme(Theme.ExtraDark)
)));

exports.default = gulp.series(cleanDest, "build:all");
