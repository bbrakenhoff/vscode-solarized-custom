import { SolarizedColor } from './solarized-color';
import { ThemeFilesGenerator } from './theme-files-generator';

ThemeFilesGenerator.generateAllThemes(SolarizedColor.Magenta);
// console.log(
//   `Bijoya index.ts[ln:9]`,
//   new ThemeGenerator(
//     new ThemeColorSet(
//       ThemeVariant.Dark,
//       new DarkThemeColorPalette(SolarizedColor.Magenta)
//     )
//   ).generateAccentColorCustomizations()
// );
// testRecursiveTransform();

// function testRecursiveTransform() {
//   const themeColorSet = new ThemeColorSet(
//     ThemeVariant.Dark,
//     new DarkThemeColorPalette(SolarizedColor.Magenta)
//   );
//   const theme = themeColorSet.propertiesAll();
//   recursiveOperation(theme);
//   console.log(`%cBijoya index.ts[ln:17]`, 'color: deeppink', theme.tokenColors);
// }

// function recursiveOperation(colorSet: any) {
//   if (Array.isArray(colorSet)) {
//     const colorSetArray = [];
//     (colorSet as any[]).forEach((item) => {
//       colorSetArray.push(recursiveOperation(item));
//     });
//     return colorSetArray;
//   } else {
//     Object.keys(colorSet).forEach((key) => {
//       if (typeof colorSet[key] === 'string') {
//         if ((colorSet[key] as string).startsWith('#')) {
//           colorSet[key] = `B - ${colorSet[key]}`;
//         }
//       } else {
//         colorSet[key] = recursiveOperation(colorSet[key]);
//       }
//     });
//     return colorSet;
//   }
// }
