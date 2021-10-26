import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoTableComponent } from './so-table.component';

describe('SoTableComponent', () => {
  let component: SoTableComponent;
  let fixture: ComponentFixture<SoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
