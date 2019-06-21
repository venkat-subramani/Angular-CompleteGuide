import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthGuard, AuthService]
    });
  });

  it('should be created', inject([AuthGuard, AuthService], (guard: AuthGuard, authService: AuthService) => {
    expect(guard).toBeTruthy();
  }));
});
