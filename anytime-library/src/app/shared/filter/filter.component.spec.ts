import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterComponent } from './filter.component';
import { MaterialModule } from './../../material/material.module';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [FormsModule, BrowserAnimationsModule, MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSort method', () => {
    component.onSort('rating');
    expect(component.sortProperty).toBe('rating');
  });

  it('should call onSort method and sort by reverse', () => {
    component.onSort('rating');
    // call method again to sort in reverse order
    component.onSort('rating');
    expect(component.sortReverse).toBe(true);
  });
});
