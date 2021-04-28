import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path : '',
    component : MainComponent,
    children : [
      {path : 'inicio', component : PrincipalComponent},
      {path : 'about', component : AboutComponent},
      {path : '**', redirectTo : 'inicio'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
