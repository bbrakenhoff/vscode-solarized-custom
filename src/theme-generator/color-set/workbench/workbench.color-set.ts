import { ThemeDependentColorSet } from '../theme-dependent-colors-set';
import { ActivityBarColorSet } from './activity-bar.color-set';
import { BasicWorkbenchColorSet } from './basic-workbench.color-set';
import { BreadcrumbsColorSet } from './breadcrumbs.color-set';
import { CommandPaletteColorSet } from './command-palette.color-set';
import { DebugToolsColorsGenerator } from './debug-tools.color-set';
import { DropdownColorSet } from './dropdown.color-set';
import { EditorGroupColorSet } from './editor-group.color-set';
import { EditorColorsSet as EditorColorSet } from './editor/editor.color-set';
import { InputColorsGenerator } from './input-colors-generator';
import { ListColorSet } from './list.color-set';
import { PeekViewColorSet } from './peek-view.color-set';
import { SideBarColorSet } from './side-bar.color-set';
import { StatusBarColorSet } from './status-bar.color-set';
import { TERMINAL_COLORS } from './terminal-colors';

export class WorkbenchColorSet extends ThemeDependentColorSet {
  get() {
    return {
      ...new BasicWorkbenchColorSet(this.themeVariant, this.colorPalette).get(),
      ...new InputColorsGenerator(this.themeVariant, this.colorPalette).get(),
      ...new DebugToolsColorsGenerator(
        this.themeVariant,
        this.colorPalette
      ).get(),
      ...new DropdownColorSet(this.themeVariant, this.colorPalette).get(),
      ...new ActivityBarColorSet(this.themeVariant, this.colorPalette).get(),
      ...new SideBarColorSet(this.themeVariant, this.colorPalette).get(),
      ...new CommandPaletteColorSet(this.themeVariant, this.colorPalette).get(),
      ...new EditorGroupColorSet(this.themeVariant, this.colorPalette).get(),
      ...new ListColorSet(this.themeVariant, this.colorPalette).get(),
      ...new BreadcrumbsColorSet(this.themeVariant, this.colorPalette).get(),
      ...new StatusBarColorSet(this.themeVariant, this.colorPalette).get(),
      ...new PeekViewColorSet(this.themeVariant, this.colorPalette).get(),
      ...new EditorColorSet(this.colorPalette).get(),
      ...TERMINAL_COLORS
    };
  }
}
