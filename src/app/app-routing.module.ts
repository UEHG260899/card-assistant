import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    loadChildren : () => import('./inicio/inicio.module').then(m => m.InicioModule)
  },
  {
   path : 'auth',
   loadChildren : () => import('./auth/auth.module').then( m => m.AuthModule)
 },
 
 {
   path : '**',
   //TODO : Cambiar a una vista 404
   redirectTo : 'home'
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
