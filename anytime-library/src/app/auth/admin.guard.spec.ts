import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminGuard } from './admin.guard';
import { AuthService } from './auth.service';

describe('AdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AdminGuard, AuthService]
    });
  });

  it('should be created', inject([AdminGuard], (guard: AdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
