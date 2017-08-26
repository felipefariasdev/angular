import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTipoCursoComponent } from './novo-tipo-curso.component';

describe('NovoTipoCursoComponent', () => {
  let component: NovoTipoCursoComponent;
  let fixture: ComponentFixture<NovoTipoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoTipoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoTipoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
