import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TopBarComponent
      ],
      imports: [SharedModule],
      providers: [MessageService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
