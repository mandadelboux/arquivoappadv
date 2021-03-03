import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTarefasPageRoutingModule } from './add-tarefas-routing.module';

import { AddTarefasPage } from './add-tarefas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTarefasPageRoutingModule
  ],
  declarations: [AddTarefasPage]
})
export class AddTarefasPageModule {}
