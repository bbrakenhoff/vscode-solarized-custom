import * as fs from 'fs';
import { ThemeJsonGenerator } from './theme-json-generator';
import { ThemeVariant } from './theme-variant';

if (!fs.existsSync('./dist/themes')) {
  fs.mkdirSync('./dist/themes');
}

Object.values(ThemeVariant).forEach((themeVariant: ThemeVariant) => {
  fs.writeFile(
    `./dist/themes/solarized-custom-${themeVariant}.json`,
    ThemeJsonGenerator.generateJson(themeVariant),
    () => {
      // Do nothing
    }
  );
});
