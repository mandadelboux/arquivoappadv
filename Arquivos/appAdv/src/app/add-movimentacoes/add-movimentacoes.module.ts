import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMovimentacoesPageRoutingModule } from './add-movimentacoes-routing.module';

import { AddMovimentacoesPage } from './add-movimentacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMovimentacoesPageRoutingModule
  ],
  declarations: [AddMovimentacoesPage]
})
export class AddMovimentacoesPageModule {}
