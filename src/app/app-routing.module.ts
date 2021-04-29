import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';


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
   path : 'dashboard',
   loadChildren : () => import('./protected/protected.module').then(m => m.ProtectedModule),
   canActivate : [ValidarTokenGuard],
   canLoad : [ValidarTokenGuard]
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
