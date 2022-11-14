import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JueguesNiaFormPage } from './juegues-nia-form.page';

const routes: Routes = [
  {
    path: '',
    component: JueguesNiaFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JueguesNiaFormPageRoutingModule {}
