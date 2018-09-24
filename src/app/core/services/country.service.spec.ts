import { TestBed } from '@angular/core/testing';

import { CountryService } from './country.service';

fdescribe('CountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
});
