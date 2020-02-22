import { Component, OnInit } from '@angular/core';
import { ConnectionBaseService } from '../connection-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.page.html',
  styleUrls: ['./lista-filmes.page.scss'],
})
export class ListaFilmesPage implements OnInit {

  post  : any = {};
  filmes: Array<any> = [];

  constructor(private servico : ConnectionBaseService) { }

  ngOnInit() {

    this.getFilmes();
  }

  getFilmes(){

    this.post.funcao = "listarFilmes";

    this.servico.getDataPost("index.php", this.post).subscribe(
      (result) => {

        if(result.success){
          this.filmes = result.result;
        }

      }, (err) => {
        console.log("Erro na requisição http");
    });
  }
}
