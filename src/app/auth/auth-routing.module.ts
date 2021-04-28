import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {
    path : '',
    component : MainComponent,
    children : [
      {path : 'login', component : LoginComponent},
      {path : 'registro', component : RegistroComponent},
      {path : '**', redirectTo : 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
