import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-add-tarefas',
  templateUrl: './add-tarefas.page.html',
  styleUrls: ['./add-tarefas.page.scss'],
})
export class AddTarefasPage implements OnInit {

  nome: string = "";
  descricao: string = "";
  data_2 : string = "";
  data: string = "";
  hora: string = "";
  status: string = "";
  
  id: string = "";
  dadosLogin : any;
  cpf_adv : string;

  constructor(private storage: NativeStorage, private actRouter: ActivatedRoute, private router: Router, private provider: Post, public toastController: ToastController) { }

  
  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
     
      //this.cpf_adv = this.dadosLogin.cpf;
      
    }); 
    this.cpf_adv = '000.000.000-10';
   
  }
  
  
  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.data = data.data;
      this.hora = data.hora;
      this.status = data.status;
     
     

    });
  }


  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com Sucesso!!',
      duration: 1000
    });
    toast.present();
  }

  Tarefas(){
    this.router.navigate(['/tarefas']);
  }

  cadastrar(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'add',
        nome : this.nome, 
        descricao : this.descricao, 
        data : this.data_2, 
        hora : this.hora, 
        
        cpf_adv : this.cpf_adv,
        };

        this.provider.dadosApi(dados, 'apiTarefas.php').subscribe(data => {
          this.router.navigate(['/tarefas']);
          this.mensagemSalvar();
        });
    });
  }

  editar(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'editar',
        nome : this.nome, 
        descricao : this.descricao, 
        data : this.data_2, 
        hora : this.hora, 
        
        cpf_adv : this.cpf_adv,
        id : this.id, 
        };

        this.provider.dadosApi(dados, 'apiTarefas.php').subscribe(data => {
          this.router.navigate(['/tarefas']);
          this.mensagemSalvar();
        });
    });
  }



}
