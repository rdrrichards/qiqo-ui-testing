import { Component, ViewChild } from '@angular/core';
import { MessageService, MenuItem } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-test';
  items: MenuItem[];
  displayAbout = false;
  // @ViewChild(ContextMenu, { static: true }) appCxMenu: ContextMenu;
  constructor(private messageService: MessageService) {
    this.items = [
      {
        label: 'Recent',
        icon: 'pi pi-fw pi-clock'
      },
      {
        label: 'About', command: (event) => { this.displayAbout = true; }
      },
      {
        separator: true,
      },
      {
        label: 'Logout',
      }
  ];
  }
  // showAbout() {
  //   this.displayAbout = true;
  // }
  onConfirm() {
    this.messageService.clear('c');
  }
  onReject() {
    this.messageService.clear('c');
  }
  showAppMenu(event: any, appCxMenu: ContextMenu) {
    console.log('open menu');
    event.preventDefault();
    event.stopPropagation();
    appCxMenu.show(event);
  }
}
