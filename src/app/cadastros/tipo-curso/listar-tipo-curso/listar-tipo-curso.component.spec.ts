import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoCursoComponent } from './listar-tipo-curso.component';

describe('ListarTipoCursoComponent', () => {
  let component: ListarTipoCursoComponent;
  let fixture: ComponentFixture<ListarTipoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTipoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTipoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
