import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  

  nome: string;
  dadosLogin : any;
  clientes: string;
  processos: string;
  audiencias: string;
  tarefas: string;
  cpf: string;

  constructor( private router: Router, private provider:Post, private storage: NativeStorage, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   
  }

  ionViewWillEnter(){
    this.storage.getItem('session_storage').then((res)=>{
      this.dadosLogin = res;
      this.nome = this.dadosLogin.nome;
     // this.cpf = this.dadosLogin.cpf;
      
    }); 
    this.cpf = '000.000.000-10';
    this.carregar();
  }

  logout(){
    this.storage.clear();
    this.router.navigate(['/login']);
  }

  carregar(){
    return new Promise(resolve => {
      
      let dados = {
        requisicao : 'listar_dados',
        cpf: this.cpf, 
         };

        this.provider.dadosApi(dados, 'apiAdv.php').subscribe(data => {

          if(data['success']) {
            this.clientes = data['result']['clientes'];
            this.processos = data['result']['processos'];
            this.audiencias = data['result']['audiencias'];
            this.tarefas = data['result']['tarefas'];
          }
          
        
    });
  });

}

}
