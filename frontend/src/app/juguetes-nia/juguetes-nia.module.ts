import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuguetesNiaPageRoutingModule } from './juguetes-nia-routing.module';

import { JuguetesNiaPage } from './juguetes-nia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuguetesNiaPageRoutingModule
  ],
  declarations: [JuguetesNiaPage]
})
export class JuguetesNiaPageModule {}
