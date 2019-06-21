import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './users.component';
import { SharedModule } from './../../shared/shared.module';
import { DataService } from './../../shared/data.service';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [SharedModule, HttpClientModule],
      providers: [DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
