import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let fakeService;
  const errorSubject = new ReplaySubject(1);

  beforeEach(async(() => {
    fakeService = {
      loginError: errorSubject.asObservable()
    };
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
      providers: [ { provide: AuthService, useValue: fakeService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign loginError on firebase login error', () => {
    errorSubject.next('login error');
    fixture.detectChanges();
    expect(component.loginError).toEqual('login error');
  });

  it('should login user', () => {
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
