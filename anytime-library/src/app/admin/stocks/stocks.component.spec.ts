import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { StocksComponent } from './stocks.component';
import { SharedModule } from './../../shared/shared.module';
import { DataService } from './../../shared/data.service';

describe('StocksComponent', () => {
  let component: StocksComponent;
  let fixture: ComponentFixture<StocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksComponent ],
      imports: [SharedModule, HttpClientModule],
      providers: [DataService, MatDialog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* it('should add new book to stocks', () => {
    component.addNewBook();
    expect(component).toBeTruthy();
  }); */
});
