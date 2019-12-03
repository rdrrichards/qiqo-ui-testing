import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { SqlEditorComponent } from './sql-editor/sql-editor.component';
import { SharedModule } from './shared/shared.module';
import { AceEditorModule } from 'ng2-ace-editor';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TopBarComponent, SqlEditorComponent,
      ],
      imports: [SharedModule, AceEditorModule],
      providers: [MessageService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
