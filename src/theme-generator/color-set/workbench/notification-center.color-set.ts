import { SolarizedColor } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class NotifcicationColorSet extends ColorSet {
  propertiesAll() {
    return {
      'notifications.background': this.colorPalette.border.hexa(),
      'notifications.foreground': this.colorPalette.defaultForeground.hexa(),
      'notificationCenter.border': this.colorPalette.border.hexa(),
      'notifications.border': this.colorPalette.border.hexa(),
      'notificationsErrorIcon.foreground': SolarizedColor.Red.color.hexa(),
      'notificationsWarningIcon.foreground': SolarizedColor.Yellow.color.hexa(),
      'notificationsInfoIcon.foreground': SolarizedColor.Blue.color.hexa()
    };
  }
}
