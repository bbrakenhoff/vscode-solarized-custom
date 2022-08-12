
// type CustomSolarizedThemeSettings {
//   accentColor?:string
// }

export class AccentColorManager {
  // private readonly customSolarizedThemeSettings:CustomSolarizedThemeSettings;

  constructor(){
    // this.customSolarizedThemeSettings = workspace.getConfiguration().get<CustomSolarizedThemeSettings>('materialTheme', {});
  }

   static onSetAccentColorCommandTriggered(){
    console.log('Bijoya accent-color-manager.ts[ln:20]');
  }
}