import { generateSemanticTokenColors } from "./semantic-token-colors";
import { generateTokenColors } from "./text-mate-token-colors/generate-token-colors";
import { generateWorkbenchColors } from "./generate-workbench-colors";
import { isGeneratingLightTheme, ThemeVariant } from "./theme-variant";

export const generateThemeJson = (themeVariant: ThemeVariant) => {
  return JSON.stringify(buildTheme(themeVariant));
};

const buildTheme = (themeVariant: ThemeVariant) => {
  const useColorsLightTheme = isGeneratingLightTheme(themeVariant);
  return {
    $schema: "vscode://schemas/color-theme",
    type: themeVariant,
    colors: generateWorkbenchColors(useColorsLightTheme),
    semanticHighlighting: true,
    semanticTokenColors: generateSemanticTokenColors,
    tokenColors: generateTokenColors(useColorsLightTheme),
  };
};
