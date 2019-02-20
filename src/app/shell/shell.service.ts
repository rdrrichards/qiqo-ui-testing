import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShellService {
  showMenubar$: Subject<boolean> = new Subject();
  isMenuOpen = true;
  constructor() {
    this.showMenubar$.next(this.isMenuOpen);
  }
  toggleMenubar() {
    this.isMenuOpen = !this.isMenuOpen;
    this.showMenubar$.next(this.isMenuOpen);
  }
}
