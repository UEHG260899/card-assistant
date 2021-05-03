import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../primeng/primeng.module';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MainComponent } from './pages/main/main.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MenubarComponent } from './components/menubar/menubar.component';





@NgModule({
  declarations: [
    MainComponent,
    InicioComponent,
    MenubarComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    PrimengModule
  ]
})
export class ProtectedModule { }
