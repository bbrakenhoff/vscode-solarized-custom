import { SolarizedColor } from '../../../../solarized-color';
import { ColorSet } from '../../colors-set';

export class WordHighlightColorSet extends ColorSet {
  generate() {
    return {
      'editor.wordHighlightBackground': `${
        this.isGeneratingLightTheme
          ? SolarizedColor.Base1
          : SolarizedColor.Base01
      }50`,
      'editor.wordHighlightBorder': `${this.colorPalette.accentColor}50`,
      'editor.wordHighlightStrongBackground': `${
        this.isGeneratingLightTheme
          ? SolarizedColor.Base1
          : SolarizedColor.Base01
      }30`,
      'editor.wordHighlightStrongBorder': `${this.colorPalette.accentColor}30`
    };
  }
}
