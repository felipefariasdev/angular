import { Component, OnInit } from '@angular/core';

import { TipoCursoService } from './../tipo-curso.service';
import { TipoCurso } from './../tipo-curso';

@Component({
  selector: 'app-novo-tipo-curso',
  templateUrl: './novo-tipo-curso.component.html',
  styleUrls: ['./novo-tipo-curso.component.css'],
  providers: [TipoCursoService]
})
export class NovoTipoCursoComponent implements OnInit {

  tipoCurso: TipoCurso = new TipoCurso();
  save_success = false;

  constructor(private tipoCursoService: TipoCursoService) { }

  ngOnInit() {
  }

  salvar() {

    this.tipoCursoService.cadastrar(this.tipoCurso).subscribe(
      retorno => console.log(retorno),
      error => console.log(error)
    );
    
    this.save_success = true;
    this.tipoCurso = new TipoCurso();
  }

}
