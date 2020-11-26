import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { AppErrorHandler } from './shared/error-handler';
import { MessageService } from 'primeng/api';
import { SharedModule } from './shared/shared.module';
import { SelectTestingComponent } from './select-testing/select-testing.component';
import { TableTestingComponent } from './table-testing/table-testing.component';
import { TreeTestingModule } from './tree-testing/tree-testing.module';
import { DropdownTestingComponent } from './dropdown-testing/dropdown-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectTestingComponent,
    TableTestingComponent,
    DropdownTestingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ShellModule,
    TreeTestingModule,
    SharedModule
  ],
  providers: [ MessageService, { provide: ErrorHandler, useClass: AppErrorHandler, deps: [ MessageService ] } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
