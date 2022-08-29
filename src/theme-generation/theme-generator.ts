import { ThemeColorSet } from './color-set/theme.color-set';
import * as Color from 'color';
import { TextMateToken } from './color-set/syntax/text-mate-token/text-mate-token';

export class ThemeGenerator {
  constructor(private readonly themeColorSet: ThemeColorSet) {}

  generateFull() {
    return this.convertColorsToHexa(this.themeColorSet.propertiesAll());
  }

  private convertColorsToHexa(colorSet: unknown): unknown {
    if (this.isGeneratingTextMateTokens(colorSet)) {
      return this.convertTextMateTokens(colorSet as TextMateToken[]);
    } else {
      return this.convertObject(colorSet as Record<string, unknown>);
    }
  }

  private isGeneratingTextMateTokens(colorSet: unknown) {
    return Array.isArray(colorSet);
  }

  private convertTextMateTokens(colorSet: TextMateToken[]) {
    const convertedArray: unknown[] = [];
    colorSet.forEach((item) => {
      convertedArray.push(this.convertColorsToHexa(item));
    });
    return convertedArray;
  }

  private convertObject(colorSet: Record<string, unknown>): unknown {
    Object.keys(colorSet).forEach((key) => {
      if (this.shouldConvertValue(colorSet[key])) {
        colorSet[key] = this.convertValueOfColorSet(colorSet[key]);
      }
    });

    return colorSet;
  }

  private shouldConvertValue(value: unknown): boolean {
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
