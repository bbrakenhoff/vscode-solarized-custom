import * as fs from "fs";
import { generateThemeJson } from "./generate-theme-json";
import { ThemeVariant } from "./theme-variant";

Object.values(ThemeVariant).forEach((themeVariant: ThemeVariant) => {
  fs.writeFile(
    `./generated-themes/solarized-custom-${themeVariant}.json`,
    generateThemeJson(themeVariant),
    () => {}
  );
});
