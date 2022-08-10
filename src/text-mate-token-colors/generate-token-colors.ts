import { generateBasicTokenColors } from "./basic-token-colors";
import { cssTokenColors } from "./css-token-colors";
import { htmlXmlTokenColors } from "./html-xml-token-colors";
import { jsonTokenColors } from "./json-token-colors";
import { scssTokenColors } from "./scss-token-colors";

export const generateTokenColors = (useColorsLightTheme:boolean) => {
  return [
    ...generateBasicTokenColors(useColorsLightTheme),
    ...jsonTokenColors,
    ...cssTokenColors,
    ...scssTokenColors,
    ...htmlXmlTokenColors,
  ];
};
