import * as Color from 'color';

export interface TextMateToken {
  name: string;
  scope: string[];
  settings: {
    foreground?: Color;
    fontStyle?: string;
  };
}
