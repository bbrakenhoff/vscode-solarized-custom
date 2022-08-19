import { ThemeColorSet } from './color-set/theme.color-set';
import * as Color from 'color';

export class ThemeGenerator {
  constructor(private readonly themeColorSet: ThemeColorSet) {}

  generateFull() {
    return this.convertColorsToHexa(this.themeColorSet.propertiesAll());
  }

  private convertColorsToHexa(colorSet: any): any {
    if (Array.isArray(colorSet)) {
      return this.convertArray(colorSet);
    } else {
      return this.convertObject(colorSet);
    }
  }

  private convertArray(colorSet: any[]) {
    const convertedArray = [];
    colorSet.forEach((item) => {
      convertedArray.push(this.convertColorsToHexa(item));
    });
    return convertedArray;
  }

  private convertObject(colorSet: any): any {
    Object.keys(colorSet).forEach((key) => {
      if (this.shouldConvertValue(colorSet[key])) {
        colorSet[key] = this.convertValueOfColorSet(colorSet[key]);
      }
    });

    return colorSet;
  }

  private shouldConvertValue(value): boolean {
    return (
      value instanceof Color ||
      typeof value === 'object' ||
      Array.isArray(value)
    );
  }

  private convertValueOfColorSet(value: unknown) {
    if (value instanceof Color) {
      return (value as Color).hexa();
    } else if (this.shouldCallConvertColorsToHexaRecursive(value)) {
      return this.convertColorsToHexa(value);
    } else {
      return value;
    }
  }

  private shouldCallConvertColorsToHexaRecursive(value: unknown) {
    return typeof value === 'object' || Array.isArray(value);
  }

  generateAccentColorCustomizations() {
    return this.convertColorsToHexa(
      this.themeColorSet.propertiesUsingAccentColor()
    );
  }
}
