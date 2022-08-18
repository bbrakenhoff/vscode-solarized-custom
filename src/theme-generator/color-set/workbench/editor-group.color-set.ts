import { ColorSet } from '../color-set';

export class EditorGroupColorSet extends ColorSet {
  propertiesAll() {
    return {
      ...this.propertiesEditorGroup(),
      ...this.propertiesTabs(),
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor() {
    return {
      'tab.activeBorderTop': this.colorPalette.accent.hexa()
    };
  }

  private propertiesEditorGroup() {
    return {
      'editorGroup.border': this.colorPalette.border.hexa(),
      'editorGroup.dropBackground':
        this.colorPalette.workbench.editorGroup.editorGroup.dropBackground,
      'editorGroupHeader.tabsBackground': this.colorPalette.workbench.editorGroup.editorGroup.tabsBackground
    };
  }

  private propertiesTabs() {
    return {
      'tab.activeBackground': this.colorPalette.defaultBackground,
      'tab.activeForeground':
        this.colorPalette.workbench.editorGroup.tab.activeForeground,
      'tab.border': this.colorPalette.border.hexa(),
      'tab.inactiveBackground':
        this.colorPalette.workbench.editorGroup.tab.inactiveBackground,
      'tab.inactiveForeground':
        this.colorPalette.workbench.editorGroup.tab.inactiveForeground
    };
  }
}
