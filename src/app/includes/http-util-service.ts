import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpUtilService {

  headers() {
    const headersParams = { 'Content-Type': 'application/json' };
    if (localStorage['token']) {
      headersParams['Authorization'] = localStorage['token'];
    }
    const headers = new Headers(headersParams);
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  extrairDados(response: Response) {
    const data = response.json();
    return data || {};
  }

  processarErros(erro: any) {
    return Observable.throw('Erro acessando servidor remoto.');
  }
}
