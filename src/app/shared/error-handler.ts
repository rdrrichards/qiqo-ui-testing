import { ErrorHandler, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  constructor(private messageService: MessageService) {}
  handleError(error: any) {
    // console.log('inside handleError');
    this.messageService.add({ key: 'c', sticky: true, severity: 'error', summary: 'Application Error', detail: error.message });
  }
}
