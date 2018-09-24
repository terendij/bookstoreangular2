import { TestBed, async, inject } from '@angular/core/testing';

import { NonEmptyGuardGuard } from './non-empty-guard.guard';

describe('NonEmptyGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonEmptyGuardGuard]
    });
  });

  it('should ...', inject([NonEmptyGuardGuard], (guard: NonEmptyGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
