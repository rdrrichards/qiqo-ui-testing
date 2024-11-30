import { Component, OnInit } from '@angular/core';
import { ShellService } from '../shell.service';

@Component({
    selector: 'app-content-area',
    templateUrl: './content-area.component.html',
    styleUrls: ['./content-area.component.css'],
    standalone: false
})
export class ContentAreaComponent implements OnInit {

  constructor(private shellService: ShellService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.shellService.toggleMenubar();
  }
  toss() {
    // console.log('about to throw');
    // throw new Error('This is a **fake** error from the application');
  }
}
