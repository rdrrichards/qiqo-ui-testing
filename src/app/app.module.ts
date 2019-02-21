import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { AppErrorHandler } from './shared/error-handler';
import { MessageService } from 'primeng/api';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
    SharedModule
  ],
  providers: [ MessageService, { provide: ErrorHandler, useClass: AppErrorHandler, deps: [ MessageService ] } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
