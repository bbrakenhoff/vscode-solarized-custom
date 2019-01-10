const gulp = require("gulp");
const del = require("del");
const concat = require("gulp-concat");

const Theme = {
    Light: "light",
    Dark: "dark",
    ExtraDark: "extra-dark"
}

function clean() {
    del(["../themes"])
}

function buildSyntaxColors() {
    return gulp.src(["./src/syntax/base.js", "./src/syntax/language/*.js"])
        .pipe(concat("syntax.js"))
        .pipe(gulp.dest('./dist/'))
}

function build() {
    buildSyntaxColors();
    // clean current themes
    // build syntax colors
    // For each theme: 
    // override theme specific syntax colors
    // build workbench colors
    // combine workbench colors and syntax colors to complete object according theme file structure
    // convert to js
    // save to themes folder
}

exports.default = gulp.series(build);