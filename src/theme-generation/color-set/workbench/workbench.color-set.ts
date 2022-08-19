import { ColorSet } from '../color-set';
import { ActivityBarColorSet } from './activity-bar.color-set';
import { BasicWorkbenchColorSet } from './basic-workbench.color-set';
import { BreadcrumbsColorSet } from './breadcrumbs.color-set';
import { CommandPaletteColorSet } from './command-palette.color-set';
import { DebugToolsColorsGenerator } from './debug-tools.color-set';
import { DropdownColorSet } from './dropdown.color-set';
import { EditorGroupColorSet } from './editor-group.color-set';
import { EditorColorsSet as EditorColorSet } from './editor/editor.color-set';
import { InputColorSet } from './input-colors-generator';
import { ListColorSet } from './list.color-set';
import { NotifcicationColorSet } from './notification-center.color-set';
import { PeekViewColorSet } from './peek-view.color-set';
import { SideBarColorSet } from './side-bar.color-set';
import { StatusBarColorSet } from './status-bar.color-set';
import { TERMINAL_COLORS } from './terminal-colors';

export class WorkbenchColorSet extends ColorSet {
  private workbenchColorSetsUsingAccentColor = [
    new ActivityBarColorSet(this.colorPalette),
    new BasicWorkbenchColorSet(this.colorPalette),
    new CommandPaletteColorSet(this.colorPalette),
    new DropdownColorSet(this.colorPalette),
    new EditorColorSet(this.colorPalette),
    new EditorGroupColorSet(this.colorPalette),
    new InputColorSet(this.colorPalette),
    new ListColorSet(this.colorPalette),
    new PeekViewColorSet(this.colorPalette),
    new StatusBarColorSet(this.colorPalette)
  ];

  propertiesAll() {
    return Object.assign(
      {
        ...TERMINAL_COLORS,
        ...new BreadcrumbsColorSet(this.colorPalette).propertiesAll(),
        ...new DebugToolsColorsGenerator(this.colorPalette).propertiesAll(),
        ...new NotifcicationColorSet(this.colorPalette).propertiesAll(),
        ...new SideBarColorSet(this.colorPalette).propertiesAll(),
      },
      ...this.workbenchColorSetsUsingAccentColor.map((colorSet) =>
        colorSet.propertiesAll()
      )
    );
  }

  propertiesUsingAccentColor() {
    return Object.assign(
      {},
      ...this.workbenchColorSetsUsingAccentColor.map((colorSet) =>
        colorSet.propertiesUsingAccentColor()
      )
    );
  }
}
