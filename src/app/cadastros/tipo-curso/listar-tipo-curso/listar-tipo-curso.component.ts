import { Component, OnInit, Provider } from '@angular/core';

import { TipoCursoService } from './../tipo-curso.service';
import { TipoCurso } from './../tipo-curso';

@Component({
  selector: 'app-listar-tipo-curso',
  templateUrl: './listar-tipo-curso.component.html',
  styleUrls: ['./listar-tipo-curso.component.css'],
  providers: [TipoCursoService]
})
export class ListarTipoCursoComponent implements OnInit {

  tipoCurso: TipoCurso = new TipoCurso();
  listarTipos: any;

  exibir_resultador: boolean;
  resultador_search;

  constructor(private tipoCursoService: TipoCursoService) {}

  ngOnInit() {
    this.listarTipos = this.tipoCursoService.listar();
  }
  visualizar(id) {
    alert('visualizar: ' + id);
  }
  alterar(id) {
    alert('alterar: ' + id);
  }
  excluir(id) {
    alert('excluir: ' + id);
  }
  buscar() {
    if (this.tipoCurso.nome) {
      this.resultador_search = this.tipoCurso.nome;
      this.exibir_resultador = true;
    }else {
      this.exibir_resultador = false;
    }
  }

}
