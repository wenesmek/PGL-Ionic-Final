import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JueguesNiaFormPageRoutingModule } from './juegues-nia-form-routing.module';

import { JueguesNiaFormPage } from './juegues-nia-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JueguesNiaFormPageRoutingModule
  ],
  declarations: [JueguesNiaFormPage]
})
export class JueguesNiaFormPageModule {}
