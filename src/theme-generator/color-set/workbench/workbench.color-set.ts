import { ColorSet } from '../colors-set';
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

export class WorkbenchColorSet extends ColorSet {
  generate() {
    return {
      ...new BasicWorkbenchColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new InputColorsGenerator(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new DebugToolsColorsGenerator(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new DropdownColorSet(this.themeVariant,this.colorPalette).generate(),
      ...new ActivityBarColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new SideBarColorSet(this.themeVariant,this.colorPalette).generate(),
      ...new CommandPaletteColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new EditorGroupColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new ListColorSet(this.themeVariant,this.colorPalette).generate(),
      ...new BreadcrumbsColorSet(
        this.themeVariant,
        this.colorPalette
      ).generate(),
      ...new StatusBarColorSet(this.themeVariant,this.colorPalette).generate(),
      ...new PeekViewColorSet(this.themeVariant,this.colorPalette).generate(),
      ...new EditorColorSet(this.themeVariant,this.colorPalette).generate(),
      ...TERMINAL_COLORS
    };
  }
}
