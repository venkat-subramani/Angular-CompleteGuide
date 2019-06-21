import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

import { RegisterComponent } from './register.component';
import { AuthService } from '../auth.service';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let fakeService;
  const errorSubject = new ReplaySubject(1);

  beforeEach(async(() => {
    fakeService = {
      registerError: errorSubject.asObservable()
    };
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
      providers: [ { provide: AuthService, useValue: fakeService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign registerError on firebase register error', () => {
    errorSubject.next('register error');
    fixture.detectChanges();
    expect(component.registerError).toEqual('register error');
  });

  it('should register user', () => {
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
