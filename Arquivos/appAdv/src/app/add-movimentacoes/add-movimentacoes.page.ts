import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-add-movimentacoes',
  templateUrl: './add-movimentacoes.page.html',
  styleUrls: ['./add-movimentacoes.page.scss'],
})
export class AddMovimentacoesPage implements OnInit {

  titulo: string = "";
  data: string = "";
  obs: string = "";
  processo: string = "";
  id: string = "";
  
  constructor(private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

    
  
  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.processo = data.processo;
      this.id = data.id;
      this.titulo = data.titulo;
      this.obs = data.obs;
      this.data = data.data;
      

    });
  }


  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
  }

  Processos(){
    this.router.navigate(['/processos']);
  }

  cadastrar(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'add-mov',
        titulo : this.titulo, 
        processo : this.processo, 
        obs : this.obs, 
        data : this.data, 
       
        };

        this.provider.dadosApi(dados, 'apiProcessos.php').subscribe(data => {
          this.router.navigate(['/processos']);
          this.mensagemSalvar();
        });
    });
  }



  editar(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'editar-mov',
        titulo : this.titulo, 
        processo : this.processo, 
        obs : this.obs, 
        data : this.data, 
        id : this.id, 
        };

        this.provider.dadosApi(dados, 'apiProcessos.php').subscribe(data => {
          this.router.navigate(['/movimentacoes']);
          this.mensagemSalvar();
        });
    });
  }


}
