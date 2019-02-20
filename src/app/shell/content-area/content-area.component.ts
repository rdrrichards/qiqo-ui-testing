import { Component, OnInit } from '@angular/core';
import { ShellService } from '../shell.service';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {

  constructor(private shellService: ShellService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.shellService.toggleMenubar();
  }

}
