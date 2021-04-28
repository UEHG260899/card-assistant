import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInicioComponent } from './nav-inicio/nav-inicio.component';



@NgModule({
  declarations: [
    NavInicioComponent
  ],
  imports: [
    CommonModule
  ],

  exports : [
    NavInicioComponent
  ]
})
export class SharedModule { }
