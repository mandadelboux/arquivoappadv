import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarMovimentacoesPage } from './mostrar-movimentacoes.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarMovimentacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarMovimentacoesPageRoutingModule {}
