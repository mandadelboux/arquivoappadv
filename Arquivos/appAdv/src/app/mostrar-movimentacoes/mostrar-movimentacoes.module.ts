import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarMovimentacoesPageRoutingModule } from './mostrar-movimentacoes-routing.module';

import { MostrarMovimentacoesPage } from './mostrar-movimentacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarMovimentacoesPageRoutingModule
  ],
  declarations: [MostrarMovimentacoesPage]
})
export class MostrarMovimentacoesPageModule {}
