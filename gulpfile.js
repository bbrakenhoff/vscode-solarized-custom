const gulp = require("gulp");
const del = require("del");
const merge = require("gulp-merge-json");
const jeditor = require("gulp-json-editor");
const json5 = require("gulp-json5-to-json");
const file = require("gulp-file");
const beautify = require("gulp-jsbeautifier");

const dest = "./themes/";

function cleanDest() {
    return del([dest])
}

function buildSyntaxColors() {
    const base = "./src/syntax/base.json";
    const languages = "./src/syntax/language/*.json";
    const themeSpecific = "./src/syntax/workbench/light.json";
    return gulp.src([base, languages, themeSpecific])
        .pipe(json5({ beautify: true }))
        .pipe(merge({ startObj: [], endObj: [], concatArrays: true, fileName: "syntax.json" }))
        .pipe(gulp.dest(dest));
}

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

function buildWorkbenchColors() {
    return gulp.src("./src/workbench/light.json")
        .pipe(json5({ beautify: true }))
        .pipe(gulp.dest(dest))
}

function cleanExtraFiles() {
    return del([dest + "light.json", dest + "syntax.json"]);
}

gulp.task("buildFullTheme", (cb) => {
    const workbench = require(dest + "light.json");
    const syntax = require(dest + "syntax.json");
    const fullTheme = { type: "light", colors: workbench, tokenColors: syntax }
    const json = JSON.stringify(fullTheme);
    const outputfile = "solarized-custom-light.json";

    return file(outputfile, json, { src: true })
        .pipe(beautify())
        .pipe(gulp.dest(dest));
});

gulp.task("build", gulp.series(
    buildSyntaxColors,
    removeDuplicates,
    buildWorkbenchColors,
    "buildFullTheme",
    cleanExtraFiles
));
// clean current themes
// build syntax colors
// For each theme:
// override theme specific syntax colors
// build workbench colors
// combine workbench colors and syntax colors to complete object according theme file structure
// convert to js
// save to themes folder

exports.default = gulp.series(cleanDest, "build");
