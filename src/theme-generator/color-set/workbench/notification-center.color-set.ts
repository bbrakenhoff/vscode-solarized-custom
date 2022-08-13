import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class NotifcicationColorSet extends ColorSet {
  get() {
    return {
      'notifications.background': this.colorPalette.border,
      'notifications.foreground': this.colorPalette.defaultForeground,
      'notificationCenter.border': this.colorPalette.border,
      'notifications.border': this.colorPalette.border,
      'notificationsErrorIcon.foreground': SolarizedColor.Red,
      'notificationsWarningIcon.foreground': SolarizedColor.Yellow,
      'notificationsInfoIcon.foreground': SolarizedColor.Blue
    };
  }
}
