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
  // @ViewChild(ContextMenu, { static: true }) appCxMenu: ContextMenu;
  constructor(private messageService: MessageService) {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }
  onConfirm() {
    this.messageService.clear('c');
  }
  onReject() {
    this.messageService.clear('c');
  }
  // showAppMenu() {
  //   console.log('open menu');
  //   this.appCxMenu.show();
  // }
}
