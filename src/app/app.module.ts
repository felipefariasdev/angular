import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpUtilService } from './includes/http-util-service';
import { NovoTipoCursoComponent } from './cadastros/tipo-curso/novo-tipo-curso/novo-tipo-curso.component';
import { ListarTipoCursoComponent } from './cadastros/tipo-curso/listar-tipo-curso/listar-tipo-curso.component';
import { NovoCursoComponent } from './cadastros/curso/novo-curso/novo-curso.component';
import { ListarCursoComponent } from './cadastros/curso/listar-curso/listar-curso.component';
import { HeadComponent } from './layout/head/head.component';
import { MenuComponent } from './layout/menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadComponent,
    MenuComponent,
    ListarCursoComponent,
    NovoCursoComponent,
    ListarTipoCursoComponent,
    NovoTipoCursoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
