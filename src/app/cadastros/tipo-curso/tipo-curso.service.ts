import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TipoCurso } from './tipo-curso';
import { HttpUtilService } from './../../includes/http-util-service';
import './../../includes/rxjs-operators';

@Injectable()
export class TipoCursoService {

  listarTiposCurso = [];

  constructor(private http: Http, private httpUtil: HttpUtilService) { }

  cadastrar(tipoCurso: TipoCurso): Observable<TipoCurso> {

    const params = JSON.stringify(tipoCurso);
    const url = 'https://httpbin.org/post';

    return this.http.post(url, params,
      this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }

  listar() {
	  
	//url para testar o get https://www.w3schools.com/angular/customers.php  
    return {
      'data': [
        {'id': '1', 'nome': 'tipo1'},
        {'id': '2', 'nome': 'tipo2'},
        {'id': '3', 'nome': 'tipo3'}
      ],
      'qtd': 3
    };
  }

  salvar(tipoCurso: TipoCurso) {
    this.listarTiposCurso.push(tipoCurso);
    console.log(this.listarTiposCurso);
    return true;
  }
}
