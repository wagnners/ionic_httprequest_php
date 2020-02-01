import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ConnectionBaseService } from 'src/app/connection-base.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.page.html',
  styleUrls: ['./detalhes-filme.page.scss'],
})
export class DetalhesFilmePage implements OnInit {
  
  post  : any = {};
  filme : Object = {};
  
  constructor(private nav : NavParams, private modal: ModalController, private servico : ConnectionBaseService) { }

  ngOnInit() {
    this.filme = this.nav.get('data');
  }

  fecharModal(){
    this.modal.dismiss();
  }

  salvarFilme(filme){

    this.post.nome = filme.Title;
    this.post.descricao = filme.Poster;
    this.post.ano = filme.Year;
    this.post.funcao = "inserirFilme";

    let status = this.servico.getDataPost("salvar.php", this.post).subscribe(
      (result) => {

      }, (err) => {
        console.log("Erro na requisição http");
    });

  }

}
