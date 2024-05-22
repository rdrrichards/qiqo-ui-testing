import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTestingComponent } from './tree-testing.component';
import { TreeModule } from 'primeng/tree';
import {TreeDragDropService} from 'primeng/api';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [TreeTestingComponent],
    exports: [TreeTestingComponent], imports: [CommonModule,
        TreeModule], providers: [TreeDragDropService, provideHttpClient(withInterceptorsFromDi())] })
export class TreeTestingModule { }
