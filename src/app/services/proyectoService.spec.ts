import { TestBed, inject } from '@angular/core/testing';

import { ProyectoServiceService } from './proyecto-service.service';

describe('ProyectoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProyectoServiceService]
    });
  });

  it('should be created', inject([ProyectoServiceService], (service: ProyectoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
