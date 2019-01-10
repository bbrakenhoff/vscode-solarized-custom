var gulp = require("gulp");
var del = require("del");

function clean(){
    del(["../themes"])
}

function build(){
 // clean current themes
 // build syntax colors
 // For each theme: 
 // override theme specific syntax colors
 // build workbench colors
 // combine workbench colors and syntax colors to complete object according theme file structure
 // convert to js
 // save to themes folder
}

exports.clean = clean;
exports.build = build;
exports.default = exports.build;