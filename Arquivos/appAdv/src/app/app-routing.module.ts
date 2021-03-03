import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'processos',
    loadChildren: () => import('./processos/processos.module').then( m => m.ProcessosPageModule)
  },
  {
    path: 'add-clientes',
    loadChildren: () => import('./add-clientes/add-clientes.module').then( m => m.AddClientesPageModule)
  },
  {
    path: 'mostrar-cliente',
    loadChildren: () => import('./mostrar-cliente/mostrar-cliente.module').then( m => m.MostrarClientePageModule)
  },
  {
  path: 'add-clientes/:id/:nome/:cpf/:email/:telefone/:endereco/:obs',
  loadChildren: () => import('./add-clientes/add-clientes.module').then( m => m.AddClientesPageModule)
},

{
  path: 'mostrar-cliente/:id/:nome/:cpf/:email/:telefone/:endereco/:obs',
  loadChildren: () => import('./mostrar-cliente/mostrar-cliente.module').then( m => m.MostrarClientePageModule)
  },
  {
    path: 'mostrar-processo',
    loadChildren: () => import('./mostrar-processo/mostrar-processo.module').then( m => m.MostrarProcessoPageModule)
  },
  {
    path: 'add-movimentacoes',
    loadChildren: () => import('./add-movimentacoes/add-movimentacoes.module').then( m => m.AddMovimentacoesPageModule)
  },

  {
    path: 'mostrar-processo/:id/:processo/:vara/:acao/:cliente/:status/:obs/:data_audiencia/:audiencias',
    loadChildren: () => import('./mostrar-processo/mostrar-processo.module').then( m => m.MostrarProcessoPageModule)
  },

  {
    path: 'add-movimentacoes/:processo',
    loadChildren: () => import('./add-movimentacoes/add-movimentacoes.module').then( m => m.AddMovimentacoesPageModule)
  },
  {
    path: 'movimentacoes',
    loadChildren: () => import('./movimentacoes/movimentacoes.module').then( m => m.MovimentacoesPageModule)
  },
  {
    path: 'mostrar-movimentacoes',
    loadChildren: () => import('./mostrar-movimentacoes/mostrar-movimentacoes.module').then( m => m.MostrarMovimentacoesPageModule)
  },

  {
    path: 'mostrar-movimentacoes/:id/:titulo/:obs/:data/:processo',
    loadChildren: () => import('./mostrar-movimentacoes/mostrar-movimentacoes.module').then( m => m.MostrarMovimentacoesPageModule)
  },

  {
    path: 'add-movimentacoes/:id/:titulo/:obs/:data/:processo',
    loadChildren: () => import('./add-movimentacoes/add-movimentacoes.module').then( m => m.AddMovimentacoesPageModule)
  },
  {
    path: 'tarefas',
    loadChildren: () => import('./tarefas/tarefas.module').then( m => m.TarefasPageModule)
  },
  {
    path: 'add-tarefas',
    loadChildren: () => import('./add-tarefas/add-tarefas.module').then( m => m.AddTarefasPageModule)
  },
  {
    path: 'mostrar-tarefa',
    loadChildren: () => import('./mostrar-tarefa/mostrar-tarefa.module').then( m => m.MostrarTarefaPageModule)
  },

  {
    path: 'add-tarefas/:id/:nome/:descricao/:data/:hora/:advogado/:status',
    loadChildren: () => import('./add-tarefas/add-tarefas.module').then( m => m.AddTarefasPageModule)
  },


  {
    path: 'mostrar-tarefa/:id/:nome/:descricao/:data/:hora/:advogado/:status',
    loadChildren: () => import('./mostrar-tarefa/mostrar-tarefa.module').then( m => m.MostrarTarefaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
