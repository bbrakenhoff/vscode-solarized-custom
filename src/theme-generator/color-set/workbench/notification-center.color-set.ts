import { SolarizedColorEnum } from '../../../solarized-color';
import { ColorSet } from '../color-set';

export class NotifcicationColorSet extends ColorSet {
  propertiesAll() {
    return {
      'notifications.background': this.colorPalette.border,
      'notifications.foreground': this.colorPalette.defaultForeground,
      'notificationCenter.border': this.colorPalette.border,
      'notifications.border': this.colorPalette.border,
      'notificationsErrorIcon.foreground': SolarizedColorEnum.Red,
      'notificationsWarningIcon.foreground': SolarizedColorEnum.Yellow,
      'notificationsInfoIcon.foreground': SolarizedColorEnum.Blue
    };
  }
}
