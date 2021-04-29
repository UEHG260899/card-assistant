import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path : '',
    component : MainComponent,
    children : [
      {path : 'inicio', component : InicioComponent},
      {path : '**', redirectTo : 'inicio'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
