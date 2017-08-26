import { TestBed, inject } from '@angular/core/testing';

import { TipoCursoService } from './tipo-curso.service';

describe('TipoCursoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoCursoService]
    });
  });

  it('should be created', inject([TipoCursoService], (service: TipoCursoService) => {
    expect(service).toBeTruthy();
  }));
});
