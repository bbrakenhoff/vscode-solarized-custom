import * as Color from 'color';
import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#base-colors
 */
export class BaseWorkbenchColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      errorForeground: SolarizedColor.Red.color.alpha(0.5),
      'selection.background':
        this.colorPalette.workbench.base.selectionBackground,
      ...this.propertiesUsingAccentColor()
    };
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return {
      focusBorder: this.colorPalette.accent.alpha(0.5)
    };
  }
}
