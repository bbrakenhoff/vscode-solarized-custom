import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../colors-set';

export class PeekViewColorSet extends ColorSet {
  generate() {
    return {
      'peekView.border': this.colorPalette.border,
      'peekViewEditor.background': this.isGeneratingLightTheme
        ? '#ddd6c150'
        : SolarizedColor.Base02,
      'peekViewEditor.matchHighlightBorder': this.colorPalette.border,
      'peekViewEditor.matchHighlightBackground': `${this.colorPalette.accentColor}30`,
      'peekViewResult.lineForeground': this.isGeneratingLightTheme
        ? `${SolarizedColor.Base00}80`
        : `${SolarizedColor.Base1}50`,
      'peekViewResult.matchHighlightBackground': `${this.colorPalette.accentColor}40`,
      'peekViewResult.background': this.isGeneratingLightTheme
        ? '#d3cbb790'
        : '#00384770',
      'peekViewResult.selectionBackground': `${this.colorPalette.accentColor}30`,
      'peekViewTitle.background': this.isGeneratingLightTheme
        ? '#d3cbb790'
        : '#00384770'
    };
  }
}
