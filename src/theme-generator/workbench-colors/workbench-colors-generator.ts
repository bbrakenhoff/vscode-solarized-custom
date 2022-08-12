import { ColorsGenerator } from '../colors-generator';
import { SolarizedColor } from '../../solarized-color';
import { EditorColorsGenerator } from './editor-colors-generator';

export class WorkbenchColorsGenerator extends ColorsGenerator {
  private static readonly TERMINAL_COLORS = {
    'terminal.ansiBlack': SolarizedColor.Base02,
    'terminal.ansiRed': SolarizedColor.Red,
    'terminal.ansiGreen': SolarizedColor.Green,
    'terminal.ansiYellow': SolarizedColor.Yellow,
    'terminal.ansiBlue': SolarizedColor.Blue,
    'terminal.ansiMagenta': SolarizedColor.Magenta,
    'terminal.ansiCyan': SolarizedColor.Cyan,
    'terminal.ansiWhite': SolarizedColor.Base2,
    'terminal.ansiBrightBlack': SolarizedColor.Base01,
    'terminal.ansiBrightRed': SolarizedColor.Orange,
    'terminal.ansiBrightGreen': SolarizedColor.Base01,
    'terminal.ansiBrightYellow': SolarizedColor.Base00,
    'terminal.ansiBrightBlue': SolarizedColor.Base0,
    'terminal.ansiBrightMagenta': SolarizedColor.Violet,
    'terminal.ansiBrightCyan': SolarizedColor.Base1,
    'terminal.ansiBrightWhite': SolarizedColor.Base3
  };

  generate() {
    return {
      ...this.generateBasicWorkbenchColors(),
      ...this.generateInputColors(),
      ...this.generateDebugToolsColors(),
      ...this.generateDropdownColors(),
      ...this.generateActivityBarColors(),
      ...this.generateSideBarColors(),
      ...this.generateCommandPaletteColors(),
      ...this.generateEditorGroupAndTabColors(),
      ...this.generateListAndTreesColors(),
      ...this.generateBreadcrumbColors(),
      ...this.generateStatusBarColors(),
      ...this.generatePeekViewColors(),
      ...new EditorColorsGenerator(this.themeVariant, this.accentColor).generate(),
      ...WorkbenchColorsGenerator.TERMINAL_COLORS
    };
  }

  private generateBasicWorkbenchColors() {
    return {
      'badge.background': this.accentColor,
      'badge.foreground': '#fffcf5',
      'button.background': `${this.accentColor}`,
      errorForeground: `${SolarizedColor.Red}99`,
      focusBorder: `${this.accentColor}99`,
      'titleBar.activeBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : SolarizedColor.Base02,
      'selection.background': this.isGeneratingLightTheme
        ? '#ccc4b0'
        : `${SolarizedColor.Cyan}99`,
      'panel.border': this.borderColor,
      'progressBar.background': this.accentColor
    };
  }

  private generateInputColors() {
    return {
      'input.background': this.borderColor,
      'input.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1,
      'input.placeholderForeground': `${
        this.isGeneratingLightTheme
          ? SolarizedColor.Base01
          : SolarizedColor.Base1
      }aa`,
      'inputOption.activeBorder': `${this.accentColor}70`
    };
  }

  private generateDebugToolsColors() {
    return {
      'debugExceptionWidget.background': this.borderColor,
      'debugExceptionWidget.border': SolarizedColor.Red,
      'debugToolBar.background': this.borderColor
    };
  }

  private generateDropdownColors() {
    return {
      'dropdown.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'dropdown.border': `${this.accentColor}80`
    };
  }

  private generateActivityBarColors() {
    return {
      'activityBar.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'activityBar.border': this.isGeneratingLightTheme ? '#ddd6c1' : '#00212B',
      'activityBar.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base03
        : '#fffcf5',
      'activityBarBadge.background': this.accentColor,
      'activityBarBadge.foreground': '#fffcf5'
    };
  }

  private generateSideBarColors() {
    return {
      'sideBar.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'sideBar.border': this.borderColor,
      'sideBarTitle.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1
    };
  }

  private generateCommandPaletteColors() {
    return {
      'pickerGroup.border': this.borderColor,
      'pickerGroup.foreground': `${this.accentColor}70`,
      'quickInput.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'quickInputList.focusBackground': `${this.accentColor}30`,
      'quickInputList.focusForeground': this.accentColor
    };
  }

  private generateEditorGroupAndTabColors() {
    const editorGroups = {
      'editorGroup.border': this.borderColor,
      'editorGroup.dropBackground': this.isGeneratingLightTheme
        ? '#ddd6c1aa'
        : `${SolarizedColor.Cyan}44`,
      'editorGroupHeader.tabsBackground': `${this.borderColor}${
        this.isGeneratingLightTheme ? 50 : 80
      }`
    };

    const tabs = {
      'tab.activeBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'tab.activeBorderTop': this.accentColor,
      'tab.activeForeground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1,
      'tab.border': this.borderColor,
      'tab.inactiveBackground': this.isGeneratingLightTheme
        ? '#d3cbb790'
        : '#00384770',
      'tab.inactiveForeground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1
    };

    return { ...editorGroups, ...tabs };
  }

  private generateListAndTreesColors() {
    return {
      'list.activeSelectionBackground': `${this.accentColor}30`,
      'list.activeSelectionForeground': this.accentColor,
      'list.focusBackground': this.isGeneratingLightTheme
        ? '#D1CBB895'
        : '#005A6F',
      'list.hoverBackground': `${this.accentColor}10`,
      'list.inactiveSelectionBackground': `${this.accentColor}20`,
      'list.inactiveSelectionForeground': this.accentColor,
      'list.highlightForeground': this.accentColor
    };
  }

  private generateBreadcrumbColors() {
    return {
      'breadcrumb.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'breadcrumbPicker.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03
    };
  }

  private generateStatusBarColors() {
    return {
      'statusBar.background': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'statusBar.debuggingBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'statusBar.foreground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1,
      'statusBar.noFolderBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base2
        : '#00212B',
      'statusBarItem.prominentBackground': this.borderColor,
      'statusBarItem.prominentHoverBackground': this.borderColor,
      'statusBarItem.remoteBackground': `${this.accentColor}99`
    };
  }

  private generatePeekViewColors() {
    return {
      'peekView.border': this.borderColor,
      'peekViewEditor.background': this.isGeneratingLightTheme
        ? '#ddd6c150'
        : SolarizedColor.Base02,
      'peekViewEditor.matchHighlightBorder': this.borderColor,
      'peekViewEditor.matchHighlightBackground': `${this.accentColor}30`,
      'peekViewResult.lineForeground': this.isGeneratingLightTheme
        ? `${SolarizedColor.Base00}80`
        : `${SolarizedColor.Base1}50`,
      'peekViewResult.matchHighlightBackground': `${this.accentColor}40`,
      'peekViewResult.background': this.isGeneratingLightTheme
        ? '#d3cbb790'
        : '#00384770',
      'peekViewResult.selectionBackground': `${this.accentColor}30`,
      'peekViewTitle.background': this.isGeneratingLightTheme
        ? '#d3cbb790'
        : '#00384770'
    };
  }
}
