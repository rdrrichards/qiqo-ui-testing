import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTestingComponent } from './tree-testing.component';
import { TreeModule } from 'primeng/tree';
import {TreeDragDropService} from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TreeTestingComponent],
  imports: [
    CommonModule,
    TreeModule,
    HttpClientModule
  ],
  exports: [TreeTestingComponent],
  providers: [TreeDragDropService]
})
export class TreeTestingModule { }
