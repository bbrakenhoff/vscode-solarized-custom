import * as Color from 'color';
import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

/**
 * @See https://code.visualstudio.com/api/references/theme-color#notification-colors
 */
export class NotifcicationsColorSet extends ColorSet {
  propertiesAll(): Record<string, Color> {
    return {
      'notifications.background': this.colorPalette.border,
      'notifications.foreground': this.colorPalette.defaultForeground,
      'notificationCenter.border': this.colorPalette.border,
      'notifications.border': this.colorPalette.border,
      'notificationsErrorIcon.foreground': SolarizedColor.Red.color,
      'notificationsWarningIcon.foreground': SolarizedColor.Yellow.color,
      'notificationsInfoIcon.foreground': SolarizedColor.Blue.color
    };
  }
}
