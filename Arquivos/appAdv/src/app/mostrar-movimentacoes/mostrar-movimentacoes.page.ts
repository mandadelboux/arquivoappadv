import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-movimentacoes',
  templateUrl: './mostrar-movimentacoes.page.html',
  styleUrls: ['./mostrar-movimentacoes.page.scss'],
})
export class MostrarMovimentacoesPage implements OnInit {

 
  processo: string = "";
  obs: string = "";
  titulo: string = "";
  id: string = "";
  data: string = "";
  

  constructor(private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.titulo = data.titulo;
      this.processo = data.processo;
      
      this.obs = data.obs;
     
      this.data = data.data;

    });
  }


   Movimentacoes(){
    this.router.navigate(['/movimentacoes']);
  }


}
