import { TestBed, inject } from '@angular/core/testing';

import { TipoVehiculoService } from './tipo-vehiculo.service';

describe('TipoVehiculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoVehiculoService]
    });
  });

  it('should be created', inject([TipoVehiculoService], (service: TipoVehiculoService) => {
    expect(service).toBeTruthy();
  }));
});
