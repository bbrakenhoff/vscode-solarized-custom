import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class EditorGroupColorSet extends ColorSet {
  generate() {
    return {
      ...this.generateEditorGroup(),
      ...this.generateTabs()
    };
  }

  private generateEditorGroup() {
    return {
      'editorGroup.border': this.colorPalette.borderColor,
      'editorGroup.dropBackground': this.isGeneratingLightTheme
        ? '#ddd6c1aa'
        : `${SolarizedColor.Cyan}44`,
      'editorGroupHeader.tabsBackground': `${this.colorPalette.borderColor}${
        this.isGeneratingLightTheme ? 50 : 80
      }`
    };
  }

  private generateTabs() {
    return {
      'tab.activeBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base3
        : SolarizedColor.Base03,
      'tab.activeBorderTop': this.colorPalette.accentColor,
      'tab.activeForeground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1,
      'tab.border': this.colorPalette.borderColor,
      'tab.inactiveBackground': this.isGeneratingLightTheme
        ? '#d3cbb790'
        : '#00384770',
      'tab.inactiveForeground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1
    };
  }
}
