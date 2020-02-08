import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFilmesPage } from './lista-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFilmesPageRoutingModule {}
