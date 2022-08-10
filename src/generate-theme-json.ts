import { SEMANTIC_TOKEN_COLORS } from "./semantic-token-colors";
import { generateTokenColors } from "./text-mate-token-colors/generate-token-colors";
import { generateWorkbenchColors } from "./generate-workbench-colors";
import { isGeneratingLightTheme, ThemeVariant } from "./theme-variant";

export const generateThemeJson = (themeVariant: ThemeVariant) => {
  const useColorsLightTheme = isGeneratingLightTheme(themeVariant);
  return JSON.stringify(buildTheme(useColorsLightTheme));
};

const buildTheme = (useColorsLightTheme: boolean) => {
  return {
    $schema: "vscode://schemas/color-theme",
    colors: generateWorkbenchColors(useColorsLightTheme),
    semanticHighlighting: true,
    semanticTokenColors: SEMANTIC_TOKEN_COLORS,
    tokenColors: generateTokenColors(useColorsLightTheme),
  };
};
