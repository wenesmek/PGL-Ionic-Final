import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuguetesNiaPage } from './juguetes-nia.page';

const routes: Routes = [
  {
    path: '',
    component: JuguetesNiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuguetesNiaPageRoutingModule {}
