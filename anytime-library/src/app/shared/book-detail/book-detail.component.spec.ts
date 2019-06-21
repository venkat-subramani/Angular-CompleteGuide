import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { BookDetailComponent } from './book-detail.component';
import { MaterialModule } from './../../material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      imports: [
        HttpClientModule,
        MaterialModule
      ],
      providers: [MAT_DIALOG_DATA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
