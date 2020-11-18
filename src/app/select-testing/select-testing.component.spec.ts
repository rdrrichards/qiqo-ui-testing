import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectTestingComponent } from './select-testing.component';
import { FormBuilder } from '@angular/forms';

describe('SelectTestingComponent', () => {
  let component: SelectTestingComponent;
  let fixture: ComponentFixture<SelectTestingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTestingComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
