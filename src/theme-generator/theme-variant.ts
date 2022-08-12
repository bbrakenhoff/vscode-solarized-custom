export enum ThemeVariant {
  Light = "light",
  Dark = "dark",
}
export const isGeneratingLightTheme = (themeVariant: ThemeVariant) =>
  themeVariant === ThemeVariant.Light;
