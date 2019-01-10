var gulp = require("gulp");
var del = require("del");

function clean(){
    del(["../themes"])
}

function build(){

}

exports.clean = clean;
exports.build = build;
exports.default = exports.build;