import * as Color from 'color';
import { ColorSet } from '../color-set';
import { ActivityBarColorSet } from './activity-bar.color-set';
import { BadgeColorSet } from './badge.color-set';
import { BaseWorkbenchColorSet } from './base-workbench.color-set';
import { BreadcrumbColorSet } from './breadcrumbs.color-set';
import { ButtonControlColorSet } from './button-control.color-set';
import { DebugColorSet } from './debug.color-set';
import { DropdownColorSet } from './dropdown.color-set';
import { EditorGroupsAndTabsColorSet } from './editor-group-and-tabs.color-set';
import { EditorColorsSet as EditorColorSet } from './editor/editor.color-set';
import { InputControlColorSet } from './input-control.colors-generator';
import { IntegratedTerminalColorSet } from './integrated-terminal-colors';
import { ListAndTreesColorSet } from './list-and-trees.color-set';
import { NotifcicationsColorSet } from './notifications.color-set';
import { PanelColorSet } from './panel.color-set';
import { PeekViewColorSet } from './peek-view.color-set';
import { ProgressBarColorSet } from './progress-bar.color-set';
import { QuickPickerColorSet } from './quick-picker.color-set';
import { SideBarColorSet } from './side-bar.color-set';
import { StatusBarColorSet } from './status-bar.color-set';
import { TitleBarColorSet } from './title-bar.color-set';

export class WorkbenchColorSet extends ColorSet {
  private workbenchColorSetsUsingAccentColor = [
    new ActivityBarColorSet(this.colorPalette),
    new BadgeColorSet(this.colorPalette),
    new BaseWorkbenchColorSet(this.colorPalette),
    new ButtonControlColorSet(this.colorPalette),
    new QuickPickerColorSet(this.colorPalette),
    new DropdownColorSet(this.colorPalette),
    new EditorColorSet(this.colorPalette),
    new EditorGroupsAndTabsColorSet(this.colorPalette),
    new InputControlColorSet(this.colorPalette),
    new ListAndTreesColorSet(this.colorPalette),
    new PeekViewColorSet(this.colorPalette),
    new ProgressBarColorSet(this.colorPalette),
    new StatusBarColorSet(this.colorPalette)
  ];

  propertiesAll(): Record<string, Color> {
    return Object.assign(
      {
        ...new IntegratedTerminalColorSet(this.colorPalette).propertiesAll(),
        ...new BreadcrumbColorSet(this.colorPalette).propertiesAll(),
        ...new DebugColorSet(this.colorPalette).propertiesAll(),
        ...new NotifcicationsColorSet(this.colorPalette).propertiesAll(),
        ...new PanelColorSet(this.colorPalette).propertiesAll(),
        ...new SideBarColorSet(this.colorPalette).propertiesAll(),
        ...new TitleBarColorSet(this.colorPalette).propertiesAll()
      },
      ...this.workbenchColorSetsUsingAccentColor.map((colorSet) =>
        colorSet.propertiesAll()
      )
    );
  }

  propertiesUsingAccentColor(): Record<string, Color> {
    return Object.assign(
      {},
      ...this.workbenchColorSetsUsingAccentColor.map((colorSet) =>
        colorSet.propertiesUsingAccentColor()
      )
    );
  }
}
