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

  listarTodos(): Observable<TipoCurso[]> {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return this.http.get(url, this.httpUtil.headers())
      .map(this.httpUtil.extrairDados)
      .catch(this.httpUtil.processarErros);
  }
  salvar(tipoCurso: TipoCurso) {
    this.listarTiposCurso.push(tipoCurso);
    console.log(this.listarTiposCurso);
    return true;
  }
}
