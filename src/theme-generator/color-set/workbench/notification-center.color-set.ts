import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class NotifcicationColorSet extends ColorSet {
  propertiesAll() {
    return {
      'notifications.background': this.colorPalette.border,
      'notifications.foreground': this.colorPalette.defaultForeground,
      'notificationCenter.border': this.colorPalette.border,
      'notifications.border': this.colorPalette.border,
      'notificationsErrorIcon.foreground': SolarizedColor.Red.color.hex(),
      'notificationsWarningIcon.foreground': SolarizedColor.Yellow.color.hex(),
      'notificationsInfoIcon.foreground': SolarizedColor.Blue.color.hex()
    };
  }
}
