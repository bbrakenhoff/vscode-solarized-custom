import { SolarizedColor } from '../../solarized-color';
import { ColorPalette } from './color-palette';

export class DarkThemeColorPalette extends ColorPalette {
  border = SolarizedColor.Base03.color.lighten(0.35).hex();
  defaultBackground = SolarizedColor.Base03.color.hexa();
  defaultForeground = SolarizedColor.Base0.color.hexa();
  defaultHighlightBackground = SolarizedColor.Base02.color.hexa();
  syntax = {
    comments: SolarizedColor.Base01.color.hexa()
  };

  workbench = {
    selectionBackground: SolarizedColor.Cyan.color.alpha(0.5).hexa(),
    input: { foreground: SolarizedColor.Base1.color },
    activityBar: { foreground: '#fffcf5' },
    dropdown: { background: '#00212B' },
    sideBar: { titleForeground: SolarizedColor.Base1.color.hexa() },
    editorGroup: {
      editorGroup: {
        dropBackground: SolarizedColor.Cyan.color.alpha(0.25).hexa(),
        tabsBackgroundOpacity: 80
      },
      tab: {
        activeForeground: SolarizedColor.Base1.color.hexa(),
        inactiveBackground: '#00384770',
        inactiveForeground: SolarizedColor.Base1.color.hexa()
      }
    },
    list: { focusBackground: '005A6F' },
    statusBar: {
      background: '#00212B',
      debuggingBackground: '#00212B',
      foreground: SolarizedColor.Base1.color.hexa(),
      noFolderBackground: '#00212B'
    },
    peekView: {
      editor: { background: SolarizedColor.Base02.color.hexa() },
      result: {
        background: '#00384770',
        lineForeground: SolarizedColor.Base1.color.alpha(0.3).hexa()
      },
      title: { background: '#00384770' }
    },
    editor: {
      brackets: {
        matchBackground: '#00212B',
        matchBorder: SolarizedColor.Base01.color.alpha(0.5).hexa()
      },
      lineNumber: {
        activeForeground: SolarizedColor.Base00.color.hexa(),
        foreground: SolarizedColor.Base00.color.alpha(0.5).hexa()
      },
      indentGuide: {
        activeBackground: SolarizedColor.Base1.color.hexa(),
        background: SolarizedColor.Base1.color.alpha(0.15).hexa()
      },
      wordHighlight: { background: SolarizedColor.Base01.color }
    }
  };
}
