import { SolarizedColor } from "./solarized-color";

export const generateWorkbenchColors = (useColorsLightTheme: boolean) => {
  return {
    ...generateBasicWorkbenchColors(useColorsLightTheme),
    ...activityBarColors(useColorsLightTheme),
    ...generateEditorBracketsColors(useColorsLightTheme),
    ...generateEditorWordHighlightColors,
    ...generateSideBarColors,
    ...generateStatusBarColors(useColorsLightTheme),
    ...generateTabColors(useColorsLightTheme),
    ...TERMINAL_COLORS,
  };
};

const generateBasicWorkbenchColors = (useColorsLightTheme: boolean) => {
  return {
    "breadcrumb.background": SolarizedColor.Base3,
    "breadcrumbPicker.background": "#d3cbb790",
    "button.background": useColorsLightTheme
      ? `${SolarizedColor.Magenta}99`
      : SolarizedColor.Yellow,
    "dropdown.background": useColorsLightTheme
      ? SolarizedColor.Base2
      : "#00212B",
    "dropdown.border": useColorsLightTheme
      ? `${SolarizedColor.Magenta}99`
      : SolarizedColor.Yellow,
    "editor.background": useColorsLightTheme
      ? SolarizedColor.Base3
      : SolarizedColor.Base03,
    "editor.foreground": useColorsLightTheme
      ? SolarizedColor.Base00
      : SolarizedColor.Base0,
    "editor.lineHighlightBackground": useColorsLightTheme
      ? SolarizedColor.Base2
      : SolarizedColor.Base02,
    "editor.selectionBackground": useColorsLightTheme
      ? SolarizedColor.Base2
      : SolarizedColor.Base02,
    "editorCursor.foreground": useColorsLightTheme
      ? SolarizedColor.Magenta
      : SolarizedColor.Yellow,
    "editorHoverWidget.background": useColorsLightTheme ? "#ccc4b0" : "#004052",
    "editorIndentGuide.background": `${SolarizedColor.Base1}${
      useColorsLightTheme ? 50 : 20
    }`,
    "editorLineNumber.activeForeground": useColorsLightTheme
      ? SolarizedColor.Base00
      : SolarizedColor.Base1,
    "editorLineNumber.foreground": useColorsLightTheme
      ? `${SolarizedColor.Base00}80`
      : `${SolarizedColor.Base1}50`,
    "editorWidget.background": useColorsLightTheme
      ? SolarizedColor.Base2
      : "#00212B",
    "editorWhitespace.foreground": `${SolarizedColor.Base1}${
      useColorsLightTheme ? 44 : 40
    }`,
    errorForeground: "#ffeaea",
    focusBorder: useColorsLightTheme ? "#d3af86" : `${SolarizedColor.Yellow}50`,
    "selection.background": useColorsLightTheme
      ? "#ccc4b0"
      : SolarizedColor.Cyan,
    "input.background": useColorsLightTheme ? "#fff9e8" : "#003847",
    "input.foreground": useColorsLightTheme
      ? SolarizedColor.Base01
      : SolarizedColor.Base1,
    "input.placeholderForeground": `${
      useColorsLightTheme ? SolarizedColor.Base01 : SolarizedColor.Base1
    }aa`,
    "inputOption.activeBorder": useColorsLightTheme
      ? "#d3af86"
      : `${SolarizedColor.Cyan}99`,
    "list.activeSelectionBackground":useColorsLightTheme? "#D1CBB8":'#005A6F',
    "list.activeSelectionForeground": "#6C6C6C",
    "list.focusBackground": useColorsLightTheme?"#D1CBB895": '#005A6F',
    "list.hoverBackground": useColorsLightTheme ? "#D1CBB880" : "#004454AA",
    "list.inactiveSelectionBackground": useColorsLightTheme
      ? "#D1CBB890"
      : "#00445488",
    "list.highlightForeground": useColorsLightTheme
      ? SolarizedColor.Magenta
      : SolarizedColor.Yellow,
    "panel.border": useColorsLightTheme ? "#ddd6c1" : "#00212B",
    "panelTitle.activeBorder": SolarizedColor.Magenta,
    "peekViewResult.background": useColorsLightTheme
      ? SolarizedColor.Base2
      : "#00212B",
    "peekViewEditor.background": useColorsLightTheme ? "#FFFBF2" : "#10192c",
    "peekViewTitle.background": useColorsLightTheme
      ? SolarizedColor.Base2
      : "#00212B",
    "peekView.border": useColorsLightTheme ? SolarizedColor.Yellow : "#2b2b4a",
    "peekViewEditor.matchHighlightBackground": useColorsLightTheme
      ? `${SolarizedColor.Base1}50`
      : "#00212B",
    "peekViewEditor.matchHighlightBorder": useColorsLightTheme
      ? "#ccc4b0"
      : `${SolarizedColor.Base01}70`,
    "progressBar.background": useColorsLightTheme
      ? SolarizedColor.Yellow
      : "#002b36",
    "titleBar.activeBackground": SolarizedColor.Base2,
    "debugToolBar.background": useColorsLightTheme ? "#ddd6c1" : "#00212B",
    "debugExceptionWidget.background": useColorsLightTheme
      ? "#ddd6c1"
      : "#00212B",
    "debugExceptionWidget.border": useColorsLightTheme
      ? "#AB395B"
      : SolarizedColor.Yellow,
    "pickerGroup.border": `${SolarizedColor.Cyan}99`,
    "pickerGroup.foreground": `${SolarizedColor.Cyan}99`,
    "extensionButton.prominentBackground": SolarizedColor.Yellow,
    "extensionButton.prominentHoverBackground": "#584c27aa",
  };
};

const activityBarColors = (useColorsLightTheme: boolean) => {
  return {
    "activityBar.background": useColorsLightTheme
      ? SolarizedColor.Base3
      : SolarizedColor.Base03,
    "activityBar.border": useColorsLightTheme ? "#ddd6c1" : "#00212B",
    "activityBar.foreground": useColorsLightTheme
      ? SolarizedColor.Base03
      : "#FFFCF5",
    "activityBar.inactiveForeground": "#767676",
    "activityBarBadge.background": useColorsLightTheme
      ? SolarizedColor.Magenta
      : SolarizedColor.Yellow,
    "activityBarBadge.foreground": "#FFFCF5",
    "badge.background": useColorsLightTheme
      ? `${SolarizedColor.Yellow}aa`
      : SolarizedColor.Base03,
  };
};

const generateEditorBracketsColors = (useColorsLightTheme: boolean) => {
  return {
    "editorBracketHighlight.foreground1": SolarizedColor.Yellow,
    "editorBracketHighlight.foreground2": SolarizedColor.Orange,
    "editorBracketHighlight.foreground3": SolarizedColor.Violet,
    "editorBracketHighlight.foreground4": SolarizedColor.Blue,
    "editorBracketHighlight.foreground5": SolarizedColor.Cyan,
    "editorBracketHighlight.foreground6": SolarizedColor.Green,
    "editorBracketMatch.background": useColorsLightTheme
      ? `${SolarizedColor.Base1}50`
      : "#00212B",
    "editorBracketMatch.border": useColorsLightTheme
      ? "#ccc4b0"
      : `${SolarizedColor.Base01}70`,
  };
};

const generateEditorWordHighlightColors = (useColorsLightTheme: boolean) => {
  return {
    "editor.wordHighlightBackground": useColorsLightTheme
      ? `${SolarizedColor.Base1}30`
      : "#00212B",
    "editor.wordHighlightBorder": useColorsLightTheme
      ? "#ccc4b0"
      : `${SolarizedColor.Base01}70`,
    "editor.wordHighlightStrongBackground": useColorsLightTheme
      ? `${SolarizedColor.Base1}30`
      : "#00212B",
    "editor.wordHighlightStrongBorder": useColorsLightTheme
      ? "#ccc4b0"
      : `${SolarizedColor.Base01}70`,
  };
};

const generateSideBarColors = (useColorsLightTheme: boolean) => {
  return {
    "sideBar.background": useColorsLightTheme
      ? SolarizedColor.Base3
      : "#002B36",
    "sideBar.border": useColorsLightTheme ? "#ddd6c1" : "#00212B",
    "sideBarTitle.foreground": useColorsLightTheme
      ? SolarizedColor.Base01
      : "#00212B",
  };
};

const generateStatusBarColors = (useColorsLightTheme: boolean) => {
  return {
    "statusBar.background": useColorsLightTheme
      ? SolarizedColor.Base2
      : "#00212B",
    "statusBar.debuggingBackground": useColorsLightTheme
      ? SolarizedColor.Base2
      : " #00212B",
    "statusBar.foreground": useColorsLightTheme
      ? "#292928"
      : SolarizedColor.Base1,
    "statusBar.noFolderBackground": useColorsLightTheme
      ? SolarizedColor.Base2
      : "#00212B",
    "statusBarItem.prominentBackground": useColorsLightTheme
      ? "#ddd6c1"
      : "#003847",
    "statusBarItem.prominentHoverBackground": useColorsLightTheme
      ? "#ddd6c199"
      : "#003847",
  };
};

const generateTabColors = (useColorsLightTheme: boolean) => {
  return {
    "editorGroup.background": useColorsLightTheme ? "#FFFBF2" : "#00384780",
    "editorGroup.border": useColorsLightTheme ? "#ddd6c1" : "#00212B",
    "editorGroup.dropBackground": useColorsLightTheme
      ? "#ddd6c1AA"
      : `${SolarizedColor.Cyan}44`,
    "editorGroupHeader.tabsBackground": useColorsLightTheme
      ? "#ddd6c150"
      : "#00384780",
    "tab.activeBackground": useColorsLightTheme
      ? SolarizedColor.Base3
      : "#002B37",
    "tab.activeBorderTop": useColorsLightTheme
      ? SolarizedColor.Magenta
      : SolarizedColor.Yellow,
    "tab.activeForeground": useColorsLightTheme
      ? SolarizedColor.Base01
      : "#d6dbdb",
    "tab.border": useColorsLightTheme ? "#ddd6c1" : "#003847",
    "tab.inactiveBackground": useColorsLightTheme ? "#d3cbb790" : "#00384780",
    "tab.inactiveForeground": useColorsLightTheme
      ? SolarizedColor.Base01
      : SolarizedColor.Base1,
  };
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
