import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlEditorComponent } from './sql-editor.component';
import { AceEditorModule } from 'ng2-ace-editor';

describe('SqlEditorComponent', () => {
  let component: SqlEditorComponent;
  let fixture: ComponentFixture<SqlEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlEditorComponent ],
      imports: [AceEditorModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
