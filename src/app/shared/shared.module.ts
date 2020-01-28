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
    ContextMenuModule
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
    ContextMenuModule
  ],
  providers: [ ]
})
export class SharedModule { }
