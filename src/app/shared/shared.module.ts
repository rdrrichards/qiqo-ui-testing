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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollPanelModule,
    MenuModule,
    PanelMenuModule,
    ButtonModule,
    PanelModule,
    ToastModule,
    MessagesModule,
    TabViewModule,
    ContextMenuModule
  ],
  exports: [
    ScrollPanelModule,
    MenuModule,
    PanelMenuModule,
    ButtonModule,
    PanelModule,
    ToastModule,
    MessagesModule,
    TabViewModule,
    ContextMenuModule
  ],
  providers: [ ]
})
export class SharedModule { }
