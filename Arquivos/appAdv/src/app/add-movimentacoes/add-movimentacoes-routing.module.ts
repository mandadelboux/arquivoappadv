import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMovimentacoesPage } from './add-movimentacoes.page';

const routes: Routes = [
  {
    path: '',
    component: AddMovimentacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMovimentacoesPageRoutingModule {}
