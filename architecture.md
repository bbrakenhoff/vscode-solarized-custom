# Architecture

## index.ts

The entry point when generating themes in development environment. This can be done by running `npm run build:themes`.

## extension-main.ts

The entry point of the extension. Subscribing and registering of the accent color command is done here.

## SolarizedColor

All colors of the solarized palette.
https://ethanschoonover.com/solarized/

## AccentColorCommand

Command being executed through the command palette, to set the accent color.

## ThemeFilesGenerator

Generates the JSON theme files in the dist folder.

## Color set

Mainly split in syntax highlighighting colors and workbench.

### Syntax 
#### SemanticTokenColorSet

Semantic token colors.

#### TextMateScopeTokenColorSet

Grouped by text mate tokens and languages.

### Workbench
Split in editor to adjust the colors in the editor. The other classes are the separate parts of the workbench being styled.

## ColorPalette

Holds all the colors that are different in the dark and light theme. Structured as the color sets are and keeping in mind the syntax of the vscode api. The color palette makes sure the accent color is set well throughout the theme.
