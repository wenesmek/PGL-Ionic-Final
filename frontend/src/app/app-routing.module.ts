import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'juguetes-nia',
    loadChildren: () => import('./juguetes-nia/juguetes-nia.module').then( m => m.JuguetesNiaPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'juegues-nia-form/:id',
    loadChildren: () => import('./juegues-nia-form/juegues-nia-form.module').then( m => m.JueguesNiaFormPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'you-are-logged-in',
    loadChildren: () => import('./you-are-logged-in/you-are-logged-in.module').then( m => m.YouAreLoggedInPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
