import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarDefaultComponent, SideBarDarkComponent, SideBarWithIconsComponent, SideBarPageLevelComponent } from './index';

import { SideBarModule, SideBarBodyModule, SidebarNavModule, SidebarNavItemModule } from '@momentum-ui/angular';
import { SidebarHeaderModule } from '../../sidebar-header/index';
import { SidebarFooterModule } from '../../sidebar-footer/index';
import { AvatarModule } from 'src/lib/avatar/avatar.module';

@NgModule({
  imports: [
    CommonModule,
    SideBarModule,
    SideBarBodyModule,
    SidebarNavModule,
    SidebarNavItemModule,
    SidebarHeaderModule,
    SidebarFooterModule,
    AvatarModule
  ],
  exports: [
    SideBarDefaultComponent,
    SideBarDarkComponent,
    SideBarWithIconsComponent,
    SideBarPageLevelComponent,
  ],
  declarations: [
    SideBarDefaultComponent,
    SideBarDarkComponent,
    SideBarWithIconsComponent,
    SideBarPageLevelComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SideBarExamplesModule { }
