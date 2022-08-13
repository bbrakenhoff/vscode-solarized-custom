import { ColorSet } from '../color-set';

export class EditorGroupColorSet extends ColorSet {
  get() {
    return {
      ...this.generateEditorGroup(),
      ...this.generateTabs()
    };
  }

  private generateEditorGroup() {
    return {
      'editorGroup.border': this.colorPalette.border,
      'editorGroup.dropBackground':
        this.colorPalette.workbench.editorGroup.editorGroup.dropBackground,
      'editorGroupHeader.tabsBackground': `${this.colorPalette.border}${this.colorPalette.workbench.editorGroup.editorGroup.tabsBackgroundOpacity}`
    };
  }

  private generateTabs() {
    return {
      'tab.activeBackground': this.colorPalette.defaultBackground,
      'tab.activeBorderTop': this.colorPalette.accentColor,
      'tab.activeForeground':
        this.colorPalette.workbench.editorGroup.tab.activeForeground,
      'tab.border': this.colorPalette.border,
      'tab.inactiveBackground':
        this.colorPalette.workbench.editorGroup.tab.inactiveBackground,
      'tab.inactiveForeground':
        this.colorPalette.workbench.editorGroup.tab.inactiveForeground
    };
  }
}
