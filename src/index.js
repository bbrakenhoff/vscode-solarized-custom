"use strict";
exports.__esModule = true;
var fs = require("fs");
var theme_generator_1 = require("./theme-generator");
fs.writeFile("./generated-themes/solarized-custom-light.json", theme_generator_1.ThemeGenerator.generate(), function () { return console.log("Done!"); });
