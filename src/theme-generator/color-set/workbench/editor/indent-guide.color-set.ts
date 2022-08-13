import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../colors-set';

export class IndentGuideColorSet extends ColorSet {
  generate() {
    return {
      'editorIndentGuide.background': `${SolarizedColor.Base1}${
        this.isGeneratingLightTheme ? 50 : 20
      }`,
      'editorIndentGuide.activeBackground': this.isGeneratingLightTheme
        ? SolarizedColor.Base01
        : SolarizedColor.Base1
    };
  }
}
