import * as fs from "fs";
import { ThemeJsonGenerator } from "./theme-json-generator";
import { ThemeVariant } from "./theme-variant";

Object.values(ThemeVariant).forEach((themeVariant: ThemeVariant) => {
  fs.writeFile(
    `./generated-themes/solarized-custom-${themeVariant}.json`,
    ThemeJsonGenerator.generateJson(themeVariant),
    () => {}
  );
});
