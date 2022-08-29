import * as Color from 'color';

export class SolarizedColor {
  static readonly Base03 = new SolarizedColor('Base03', Color('#002b36'));
  static readonly Base02 = new SolarizedColor('Base02', Color('#073642'));
  static readonly Base01 = new SolarizedColor('Base01', Color('#586e75'));
  static readonly Base00 = new SolarizedColor('Base00', Color('#657b83'));
  static readonly Base0 = new SolarizedColor('Base0', Color('#839496'));
  static readonly Base1 = new SolarizedColor('Base1', Color('#93a1a1'));
  static readonly Base2 = new SolarizedColor('Base2', Color('#eee8d5'));
  static readonly Base3 = new SolarizedColor('Base3', Color('#fdf6e3'));
  static readonly Blue = new SolarizedColor('Blue', Color('#268bd2'));
  static readonly Cyan = new SolarizedColor('Cyan', Color('#2aa198'));
  static readonly Green = new SolarizedColor('Green', Color('#859900'));
  static readonly Magenta = new SolarizedColor('Magenta', Color('#d33682'));
  static readonly Orange = new SolarizedColor('Orange', Color('#cb4b16'));
  static readonly Red = new SolarizedColor('Red', Color('#dc322f'));
  static readonly Violet = new SolarizedColor('Violet', Color('#6c71c4'));
  static readonly Yellow = new SolarizedColor('Yellow', Color('#b58900'));

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

  static findByName(name?: string): SolarizedColor {
    const foundColor = SolarizedColor.values().find(
      (solarizedColor) => solarizedColor.name === name
    );

    if (foundColor) {
      return foundColor;
    } else {
      throw new Error(`Invalid color name given ${name}`);
    }
  }

  private constructor(readonly name: string, readonly color: Color) {}
}
