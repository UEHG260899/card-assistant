import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';


import { MainComponent } from './pages/main/main.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AboutComponent } from './components/about/about.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PrincipalComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
