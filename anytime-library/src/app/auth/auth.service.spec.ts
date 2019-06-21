import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [AuthService]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should register new user', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.registerUser('venkat', '123456');
    expect(service).toBeTruthy();
  });

  it('should login to the app', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.loginUser('venkat', '123456');
    expect(service).toBeTruthy();
  });

  /* it('should get auth token', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.getToken();
    expect(service).toBeTruthy();
  }); */
});
