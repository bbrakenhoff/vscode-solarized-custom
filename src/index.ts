import * as fs from "fs";
import { ThemeGenerator } from "./theme-generator";

fs.writeFile(
  "./generated-themes/solarized-custom-light.json",
  ThemeGenerator.generate(),
  () => console.log("Done!")
);
