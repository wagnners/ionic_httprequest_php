import { Component } from '@angular/core';
import { MovieRequestService } from '../movie-request.service';
import { ModalController } from '@ionic/angular';
import { DetalhesFilmePage } from '../modal/filme/detalhes-filme/detalhes-filme.page';
import { ConnectionBaseService } from '../connection-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  post: any = {};
  filmes: Array<any> = [];
  procura: string = "";
  total: number = 0;
  // resultados: string = "";
  estaVazio: boolean = false;
  mostrarTotal: boolean = false;

  constructor(private movieRequest : MovieRequestService, private modalCtrl:ModalController, private service:ConnectionBaseService, private router: Router) {

  }

  getResultados(){
 
    if(this.procura != ""){

      this.movieRequest.conectarAPI(this.procura, "movie").subscribe((results) => {

        if(results.Response == "True"){
         
          this.filmes       = results.Search;
          this.total        = results.totalResults;          
          this.estaVazio    = false;
          this.mostrarTotal = true;
        }else{
          
          this.filmes       = [];
          this.estaVazio    = true;
          this.mostrarTotal = false;
        }
       });

    }else{
      this.estaVazio    = true;
      this.mostrarTotal = false;
      this.filmes       = [];
    }

  }

  async abrirDetalhes(filme){

    const modal = await this.modalCtrl.create({
      component: DetalhesFilmePage,
      componentProps: {
        data: filme
      }
    });

    modal.present();
 
  }

  salvarFilmeBanco(filme){
    
    this.post.nome = filme.Title;
    this.post.descricao = filme.Poster;
    this.post.ano = filme.Year;

    let status = this.service.getDataPost("salvar.php", this.post).subscribe(
      (result) => {
        if (result) {
         console.log("salvou");
        } else {
          console.log("erro");
        }
      }, (err) => {
        console.log("Error in httprequest login()");

      });

  }

  abrirListaFilmes(){
    this.router.navigate(['lista-filmes']);  
  }

}
