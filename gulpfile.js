const gulp = require("gulp");
const del = require("del");
const concat = require("gulp-concat");
const flatmap = require("gulp-flatmap");
const merge = require("gulp-merge-json");
const fs = require("fs");
const jeditor = require("gulp-json-editor");

const destinationFolder = "./dist/";
const Theme = {
    Light: "light",
    Dark: "dark",
    ExtraDark: "extra-dark"
}
const theme = "./src/syntax/light.json";

function clean() {
    return del([destinationFolder])
}

function buildSyntaxColors() {
    const base = "./src/syntax/base.json";
    const languages = "./src/syntax/language/*.json";
    return gulp.src([base, languages, theme])
        .pipe(merge({ startObj: [], endObj: [], concatArrays: true }))
        .pipe(gulp.dest(destinationFolder));
}

function buildWorkbenchSyntaxColors() {
    return gulp.src(destinationFolder + "combined.json")
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
                    console.log("Bijoya - entriestoremove", entriesWithSameName);
                    json = json.filter((item) =>
                        entriesWithSameName.indexOf(item) === -1
                    )
                }
            });

            return json;
        }))
        .pipe(gulp.dest(destinationFolder));
}

gulp.task("build", gulp.series(buildSyntaxColors, buildWorkbenchSyntaxColors));
// clean current themes
// build syntax colors
// For each theme:
// override theme specific syntax colors
// build workbench colors
// combine workbench colors and syntax colors to complete object according theme file structure
// convert to js
// save to themes folder

exports.default = gulp.series(clean, "build");
