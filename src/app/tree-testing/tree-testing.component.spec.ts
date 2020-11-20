import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTestingComponent } from './tree-testing.component';

describe('TreeTestingComponent', () => {
  let component: TreeTestingComponent;
  let fixture: ComponentFixture<TreeTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
