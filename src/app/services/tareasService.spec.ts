import { TestBed, inject } from '@angular/core/testing';

import { TareasServiceService } from './tareasService';

describe('TareasServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TareasServiceService]
    });
  });

  it('should be created', inject([TareasServiceService], (service: TareasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
