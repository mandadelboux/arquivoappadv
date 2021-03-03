import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  lista : any = [];
  limit : number = 10;
  start : number = 0;
  nome : Date;
  dadosLogin : any;
  cpf_adv: string = "";
  
  constructor(private storage: NativeStorage, private router: Router,  private provider: Post) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
     
      //this.cpf_adv = this.dadosLogin.cpf;
      
    }); 
    this.cpf_adv = '000.000.000-10';

    this.lista = [];
    this.start = 0;
    this.carregar();
  }

  addTarefas(){
    this.router.navigate(['/add-tarefas']);
  }

  carregar(){
    return new Promise(resolve => {
      this.lista = [];
      let dados = {
        requisicao : 'listar',
        nome : this.nome,
        cpf_adv : this.cpf_adv,
        limit : this.limit,
        start : this.start
        };

        this.provider.dadosApi(dados, 'apiTarefas.php').subscribe(data => {

        if(data['result'] == '0') {
          this.ionViewWillEnter();
        }else{
          for(let item of data['result']){
            this.lista.push(item);
            
          }
        }
         
         resolve(true);
         
        });
    });
    
  }


  editar(id, nome, descricao, data, hora, advogado, status){
    this.router.navigate(['/add-tarefas/' + id + '/' + nome + '/' + descricao + '/' + data + '/' + hora + '/' + advogado + '/' + status]);
  }

  mostrar(id, nome, descricao, data, hora, advogado, status){
    this.router.navigate(['/mostrar-tarefa/' + id + '/' + nome + '/' + descricao + '/' + data + '/' + hora + '/' + advogado + '/' + status]);
  }

  
  excluir(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'excluir',
        id : id, 
        };

        this.provider.dadosApi(dados, 'apiTarefas.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
  }



  concluir(id){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'concluir',
        id : id, 
        };

        this.provider.dadosApi(dados, 'apiTarefas.php').subscribe(data => {
         this.ionViewWillEnter();
        });
    });
  }




 //atualizar o list view

 doRefresh(event) {
    
  setTimeout(() => {
    this.ionViewWillEnter();
    event.target.complete();
  }, 500);
}


//barra de rolagem
loadData(event) {

  this.start += this.limit;

  setTimeout(() => {
    this.carregar().then(()=>{ 
      event.target.complete();
     });
   
  }, 500);
  

}
  

}
