import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-tarefa',
  templateUrl: './mostrar-tarefa.page.html',
  styleUrls: ['./mostrar-tarefa.page.scss'],
})
export class MostrarTarefaPage implements OnInit {

  nome: string = "";
  descricao: string = "";
  data: string = "";
  id: string = "";
  hora: string = "";
  status: string = "";
  

  constructor(private actRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRouter.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.descricao = data.descricao;
      this.status = data.status;
      this.hora = data.hora;
      this.data = data.data;

    });
  }


   Tarefas(){
    this.router.navigate(['/tarefas']);
  }



}
