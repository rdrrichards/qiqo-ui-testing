import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ContentAreaComponent } from './content-area/content-area.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TopBarComponent, MenuBarComponent, ContentAreaComponent],
  imports: [
    CommonModule,
    SharedModule
    // RouterModule.forRoot([])
  ],
  exports: [TopBarComponent, MenuBarComponent, ContentAreaComponent]
})
export class ShellModule { }
