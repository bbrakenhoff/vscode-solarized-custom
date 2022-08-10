import { SolarizedColor } from "./solarized-color";

export const generateWorkbenchColors = (useColorsLightTheme: boolean) => {
  return {
    ...generateBasicWorkbenchColors(useColorsLightTheme),
    ...activityBarColors(useColorsLightTheme),
    ...generateEditorBracketsColors(useColorsLightTheme),
    ...EDITOR_WORD_HIGHLIGHT_COLORS,
    ...SIDE_BAR_COLORS,
    ...STATUS_BAR_COLORS,
    ...TAB_COLORS,
    ...TERMINAL_COLORS,
  };
};

const generateBasicWorkbenchColors = (useColorsLightTheme: boolean) => {
  return {
    "breadcrumb.background": SolarizedColor.Base3,
    "breadcrumbPicker.background": "#d3cbb790",
    "button.background": SolarizedColor.Magenta,
    "dropdown.background": SolarizedColor.Base2,
    "dropdown.border": useColorsLightTheme
      ? SolarizedColor.Magenta
      : SolarizedColor.Yellow,
    "editor.background": useColorsLightTheme
      ? SolarizedColor.Base3
      : SolarizedColor.Base03,
    "editor.foreground": useColorsLightTheme
      ? SolarizedColor.Base00
      : SolarizedColor.Base0,
    "editor.lineHighlightBackground": SolarizedColor.Base2,
    "editor.selectionBackground": SolarizedColor.Base2,
    "editorCursor.foreground": SolarizedColor.Magenta,
    "editorHoverWidget.background": "#ccc4b0",
    "editorIndentGuide.background": `${SolarizedColor.Base1}50`,
    "editorLineNumber.foreground": `${SolarizedColor.Base00}80`,
    "editorLineNumber.activeForeground": SolarizedColor.Base00,
    "editorWidget.background": SolarizedColor.Base2,
    "editorWhitespace.foreground": `${SolarizedColor.Base1}44`,
    errorForeground: "#ffeaea",
    focusBorder: useColorsLightTheme ? "#d3af86" : "#b5890050",
    "selection.background": useColorsLightTheme
      ? "#ccc4b0"
      : SolarizedColor.Cyan,
    "input.background": useColorsLightTheme ? "#fff9e8" : "#003847",
    "input.foreground": SolarizedColor.Base01,
    "input.placeholderForeground": `${
      useColorsLightTheme ? SolarizedColor.Base01 : SolarizedColor.Base1
    }aa`,
    "inputOption.activeBorder": useColorsLightTheme
      ? "#d3af86"
      : SolarizedColor.Cyan,
    "list.activeSelectionBackground": "#D1CBB8",
    "list.activeSelectionForeground": "#6C6C6C",
    "list.focusBackground": "#D1CBB895",
    "list.hoverBackground": "#D1CBB880",
    "list.inactiveSelectionBackground": "#D1CBB890",
    "list.highlightForeground": SolarizedColor.Magenta,
    "panel.border": "#ddd6c1",
    "panelTitle.activeBorder": SolarizedColor.Magenta,
    "peekViewResult.background": SolarizedColor.Base2,
    "peekViewEditor.background": "#FFFBF2",
    "peekViewTitle.background": SolarizedColor.Base2,
    "peekView.border": SolarizedColor.Yellow,
    "peekViewEditor.matchHighlightBackground": `${SolarizedColor.Base1}50`,
    "peekViewEditor.matchHighlightBorder": "#ccc4b0",
    "progressBar.background": SolarizedColor.Yellow,
    "titleBar.activeBackground": SolarizedColor.Base2,
    "debugToolBar.background": "#ddd6c1",
    "debugExceptionWidget.background": "#ddd6c1",
    "debugExceptionWidget.border": "#AB395B",
    "pickerGroup.border": SolarizedColor.Cyan,
    "pickerGroup.foreground": SolarizedColor.Cyan,
    "extensionButton.prominentBackground": SolarizedColor.Yellow,
    "extensionButton.prominentHoverBackground": "#584c27aa",
  };
};

const activityBarColors = (useColorsLightTheme: boolean) => {
  return {
    "activityBar.background": SolarizedColor.Base3,
    "activityBar.border": "#ddd6c1",
    "activityBar.foreground": "#292928",
    "activityBar.inactiveForeground": "#767676",
    "activityBarBadge.background": SolarizedColor.Magenta,
    "activityBarBadge.foreground": "#FFFCF5",
    "badge.background": useColorsLightTheme
      ? `${SolarizedColor.Yellow}aa`
      : SolarizedColor.Base03,
  };
};

const generateEditorBracketsColors = (useColorsLightTheme: boolean) => {
  const editorBracketsColors = {
    "editorBracketHighlight.foreground1": SolarizedColor.Yellow,
    "editorBracketHighlight.foreground2": SolarizedColor.Orange,
    "editorBracketHighlight.foreground3": SolarizedColor.Violet,
    "editorBracketHighlight.foreground4": SolarizedColor.Blue,
    "editorBracketHighlight.foreground5": SolarizedColor.Cyan,
    "editorBracketHighlight.foreground6": SolarizedColor.Green,
  };

  if (useColorsLightTheme) {
    editorBracketsColors[
      "editorBracketMatch.background"
    ] = `${SolarizedColor.Base1}50`;
    editorBracketsColors["editorBracketMatch.border"] = "#ccc4b0";
  }
  return editorBracketsColors;
};

const EDITOR_WORD_HIGHLIGHT_COLORS = {
  "editor.wordHighlightBackground": `${SolarizedColor.Base1}30`,
  "editor.wordHighlightBorder": "#ccc4b0",
  "editor.wordHighlightStrongBackground": `${SolarizedColor.Base1}30`,
  "editor.wordHighlightStrongBorder": "#ccc4b0",
};

const SIDE_BAR_COLORS = {
  "sideBar.background": SolarizedColor.Base3,
  "sideBar.border": "#ddd6c1",
  "sideBarTitle.foreground": SolarizedColor.Base01,
};

const STATUS_BAR_COLORS = {
  "editorGroup.border": "#ddd6c1",
  "editorGroup.dropBackground": "#ddd6c1AA",
  "editorGroupHeader.tabsBackground": "#ddd6c150",
  "statusBar.background": SolarizedColor.Base2,
  "statusBar.debuggingBackground": SolarizedColor.Base2,
  "statusBar.foreground": "#292928",
  "statusBar.noFolderBackground": SolarizedColor.Base2,
  "statusBarItem.prominentBackground": "#ddd6c1",
  "statusBarItem.prominentHoverBackground": "#ddd6c199",
};

const TAB_COLORS = {
  "tab.activeBackground": SolarizedColor.Base3,
  "tab.activeBorderTop": SolarizedColor.Magenta,
  "tab.activeForeground": SolarizedColor.Base01,
  "tab.border": "#ddd6c1",
  "tab.inactiveBackground": "#d3cbb790",
  "tab.inactiveForeground": SolarizedColor.Base01,
};

const TERMINAL_COLORS = {
  "terminal.ansiBlack": SolarizedColor.Base02,
  "terminal.ansiRed": SolarizedColor.Red,
  "terminal.ansiGreen": SolarizedColor.Green,
  "terminal.ansiYellow": SolarizedColor.Yellow,
  "terminal.ansiBlue": SolarizedColor.Blue,
  "terminal.ansiMagenta": SolarizedColor.Magenta,
  "terminal.ansiCyan": SolarizedColor.Cyan,
  "terminal.ansiWhite": SolarizedColor.Base2,
  "terminal.ansiBrightBlack": SolarizedColor.Base01,
  "terminal.ansiBrightRed": SolarizedColor.Orange,
  "terminal.ansiBrightGreen": SolarizedColor.Base01,
  "terminal.ansiBrightYellow": SolarizedColor.Base00,
  "terminal.ansiBrightBlue": SolarizedColor.Base0,
  "terminal.ansiBrightMagenta": SolarizedColor.Violet,
  "terminal.ansiBrightCyan": SolarizedColor.Base1,
  "terminal.ansiBrightWhite": SolarizedColor.Base3,
};
