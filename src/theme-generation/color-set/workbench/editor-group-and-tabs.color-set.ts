import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
 */
export class EditorGroupsAndTabsColorSet extends ColorSet {
  propertiesAll() {
    return {
      ...this.propertiesEditorGroup(),
      ...this.propertiesTabs(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'tab.activeBorderTop': this.colorPalette.accent
    };
  }

  private propertiesEditorGroup() {
    return {
      'editorGroup.border': this.colorPalette.border,
      'editorGroup.dropBackground':
        this.colorPalette.workbench.editorGroupAndTabs.editorGroup.dropBackground,
      'editorGroupHeader.tabsBackground':
        this.colorPalette.workbench.editorGroupAndTabs.editorGroup.tabsBackground
    };
  }

  private propertiesTabs() {
    return {
      'tab.activeBackground': this.colorPalette.defaultBackground,
      'tab.activeForeground':
        this.colorPalette.workbench.editorGroupAndTabs.tab.activeForeground,
      'tab.border': this.colorPalette.border,
      'tab.inactiveBackground':
        this.colorPalette.workbench.editorGroupAndTabs.tab.inactiveBackground,
      'tab.inactiveForeground':
        this.colorPalette.workbench.editorGroupAndTabs.tab.inactiveForeground
    };
  }
}
