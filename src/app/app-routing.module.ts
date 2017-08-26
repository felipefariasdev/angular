import { NovoTipoCursoComponent } from './cadastros/tipo-curso/novo-tipo-curso/novo-tipo-curso.component';
import { ListarTipoCursoComponent } from './cadastros/tipo-curso/listar-tipo-curso/listar-tipo-curso.component';
import { NovoCursoComponent } from './cadastros/curso/novo-curso/novo-curso.component';
import { ListarCursoComponent } from './cadastros/curso/listar-curso/listar-curso.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastros/curso/listar', component: ListarCursoComponent},
  {path: 'cadastros/curso/novo', component: NovoCursoComponent},
  {path: 'cadastros/tipo-curso/listar', component: ListarTipoCursoComponent},
  {path: 'cadastros/tipo-curso/novo', component: NovoTipoCursoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
