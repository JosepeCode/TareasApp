import { TestBed, inject } from '@angular/core/testing';

import { LogoService } from './logoservice';

describe('LogoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoService]
    });
  });

  it('should be created', inject([LogoService], (service: LogoService) => {
    expect(service).toBeTruthy();
  }));
});
