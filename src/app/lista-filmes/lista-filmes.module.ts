import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFilmesPageRoutingModule } from './lista-filmes-routing.module';

import { ListaFilmesPage } from './lista-filmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFilmesPageRoutingModule
  ],
  declarations: [ListaFilmesPage]
})
export class ListaFilmesPageModule {}
