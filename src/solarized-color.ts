export enum SolarizedColorEnum {
  Base03 = '#002b36',
  Base02 = '#073642',
  Base01 = '#586e75',
  Base00 = '#657b83',
  Base0 = '#839496',
  Base1 = '#93a1a1',
  Base2 = '#eee8d5',
  Base3 = '#fdf6e3',
  Blue = '#268bd2',
  Cyan = '#2aa198',
  Green = '#859900',
  Magenta = '#d33682',
  Orange = '#cb4b16',
  Red = '#dc322f',
  Violet = '#6c71c4',
  Yellow = '#b58900'
}

export class SolarizedColor {
  static readonly Base03 = new SolarizedColor(' Base03', '#002b36');
  static readonly Base02 = new SolarizedColor(' Base02', '#073642');
  static readonly Base01 = new SolarizedColor(' Base01', '#586e75');
  static readonly Base00 = new SolarizedColor(' Base00', '#657b83');
  static readonly Base0 = new SolarizedColor(' Base0', '#839496');
  static readonly Base1 = new SolarizedColor(' Base1', '#93a1a1');
  static readonly Base2 = new SolarizedColor(' Base2', '#eee8d5');
  static readonly Base3 = new SolarizedColor(' Base3', '#fdf6e3');
  static readonly Blue = new SolarizedColor(' Blue', '#268bd2');
  static readonly Cyan = new SolarizedColor(' Cyan', '#2aa198');
  static readonly Green = new SolarizedColor(' Green', '#859900');
  static readonly Magenta = new SolarizedColor(' Magenta', '#d33682');
  static readonly Orange = new SolarizedColor(' Orange', '#cb4b16');
  static readonly Red = new SolarizedColor(' Red', '#dc322f');
  static readonly Violet = new SolarizedColor(' Violet', '#6c71c4');
  static readonly Yellow = new SolarizedColor(' Yellow', '#b58900');

  static values() {
    return [
      SolarizedColor.Base03,
      SolarizedColor.Base02,
      SolarizedColor.Base01,
      SolarizedColor.Base00,
      SolarizedColor.Base0,
      SolarizedColor.Base1,
      SolarizedColor.Base2,
      SolarizedColor.Base3,
      SolarizedColor.Blue,
      SolarizedColor.Cyan,
      SolarizedColor.Green,
      SolarizedColor.Magenta,
      SolarizedColor.Orange,
      SolarizedColor.Red,
      SolarizedColor.Violet,
      SolarizedColor.Yellow
    ];
  }

  private constructor(readonly name: string, readonly hexCode: string) {}
}
