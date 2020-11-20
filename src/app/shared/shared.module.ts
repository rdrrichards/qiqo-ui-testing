import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { TabViewModule } from 'primeng/tabview';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DialogModule,
    ScrollPanelModule,
    MenuModule,
    PanelMenuModule,
    ButtonModule,
    PanelModule,
    ToastModule,
    MessagesModule,
    TabViewModule,
    ContextMenuModule,
    TableModule,
    SidebarModule,
    TreeModule
  ],
  exports: [
    DialogModule,
    ScrollPanelModule,
    MenuModule,
    PanelMenuModule,
    ButtonModule,
    PanelModule,
    ToastModule,
    MessagesModule,
    TabViewModule,
    ContextMenuModule,
    TableModule,
    SidebarModule,
    TreeModule
  ],
  providers: [ ]
})
export class SharedModule { }
