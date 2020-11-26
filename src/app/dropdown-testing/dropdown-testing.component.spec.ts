import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTestingComponent } from './dropdown-testing.component';

describe('DropdownTestingComponent', () => {
  let component: DropdownTestingComponent;
  let fixture: ComponentFixture<DropdownTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
