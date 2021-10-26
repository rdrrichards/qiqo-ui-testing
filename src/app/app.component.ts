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
  utils: MenuItem[];
  displayAbout = false;
  // @ViewChild(ContextMenu, { static: true }) appCxMenu: ContextMenu;
  constructor(private messageService: MessageService) {
    this.items = [
      { label: 'Sign', icon: 'pi pi-pencil', command: (event) => { console.log('Sign', event); }},
      { label: 'Image', icon: 'pi pi-image', command: (event) => { console.log('Image', event); }},
      { label: 'Changes', icon: 'pi pi-money-bill', command: (event) => { console.log('Changes', event); }},
      { label: 'Camera', icon: 'pi pi-camera', command: (event) => { console.log('Camera', event); }}
    ];
    this.utils = [
      { label: 'Refresh', icon: 'pi pi-refresh', command: (event) => { console.log('Refresh', event); }},
      { label: 'Undo', icon: 'pi pi-undo', command: (event) => { console.log('Undo', event); }},
      { label: 'Redo', icon: 'pi pi-replay', command: (event) => { console.log('Redo', event); }},
      { label: 'Zoom In', icon: 'pi pi-search-plus', command: (event) => { console.log('Zoom In', event); }},
      { label: 'Zoom Out', icon: 'pi pi-search-minus', command: (event) => { console.log('Zoom In', event); }}
    ];
  }
  // showAbout() {
  //   console.log('');
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
  otherWindow(event: any): void {
    const viewer = window.open('http://localhost:4201', 'My Other Window', 'left=50,top=50,width=400,height=300');
  }
}
