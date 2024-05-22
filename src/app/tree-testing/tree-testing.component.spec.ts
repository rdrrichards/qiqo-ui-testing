import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTestingComponent } from './tree-testing.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('TreeTestingComponent', () => {
  let component: TreeTestingComponent;
  let fixture: ComponentFixture<TreeTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TreeTestingComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
