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
  propertiesAll() {
    return {
      ...new BasicWorkbenchColorSet(this.colorPalette).propertiesAll(),
      ...new InputColorSet(this.colorPalette).propertiesAll(),
      ...new DebugToolsColorsGenerator(this.colorPalette).propertiesAll(),
      ...new DropdownColorSet(this.colorPalette).propertiesAll(),
      ...new ActivityBarColorSet(this.colorPalette).propertiesAll(),
      ...new SideBarColorSet(this.colorPalette).propertiesAll(),
      ...new CommandPaletteColorSet(this.colorPalette).propertiesAll(),
      ...new EditorGroupColorSet(this.colorPalette).propertiesAll(),
      ...new ListColorSet(this.colorPalette).propertiesAll(),
      ...new BreadcrumbsColorSet(this.colorPalette).propertiesAll(),
      ...new StatusBarColorSet(this.colorPalette).propertiesAll(),
      ...new PeekViewColorSet(this.colorPalette).propertiesAll(),
      ...new NotifcicationColorSet(this.colorPalette).propertiesAll(),
      ...new EditorColorSet(this.colorPalette).propertiesAll(),
      ...TERMINAL_COLORS
    };
  }
}
