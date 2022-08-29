import * as Color from 'color';
import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
 */
export class IntegratedTerminalColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'terminal.ansiBrightBlack': SolarizedColor.Base01.color,
      'terminal.ansiBrightBlue': SolarizedColor.Base0.color,
      'terminal.ansiBrightCyan': SolarizedColor.Base1.color,
      'terminal.ansiBrightGreen': SolarizedColor.Base01.color,
      'terminal.ansiBrightMagenta': SolarizedColor.Violet.color,
      'terminal.ansiBrightRed': SolarizedColor.Orange.color,
      'terminal.ansiBrightWhite': SolarizedColor.Base3.color,
      'terminal.ansiBrightYellow': SolarizedColor.Base00.color,
      'terminal.ansiBlack': SolarizedColor.Base02.color,
      'terminal.ansiBlue': SolarizedColor.Blue.color,
      'terminal.ansiCyan': SolarizedColor.Cyan.color,
      'terminal.ansiGreen': SolarizedColor.Green.color,
      'terminal.ansiMagenta': SolarizedColor.Magenta.color,
      'terminal.ansiRed': SolarizedColor.Red.color,
      'terminal.ansiWhite': SolarizedColor.Base2.color,
      'terminal.ansiYellow': SolarizedColor.Yellow.color
    };
  }
}
