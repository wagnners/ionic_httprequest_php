import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, AlertController } from '@ionic/angular';
import { ConnectionBaseService } from 'src/app/connection-base.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.page.html',
  styleUrls: ['./detalhes-filme.page.scss'],
})
export class DetalhesFilmePage implements OnInit {
  
  post  : any = {};
  filme : Object = {};
  
  constructor(private nav : NavParams, private modal: ModalController, private servico : ConnectionBaseService,public alertController: AlertController) { }

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

    let status = this.servico.getDataPost("index.php", this.post).subscribe(
      (result) => {

        if(result.sucess){
          this.presentAlert("Filme salvo com sucesso.");
        }else{
          this.presentAlert("Erro ao salvar filme.");
        }

      }, (err) => {
        this.presentAlert("Erro com a conexão de dados.");
    });

  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
