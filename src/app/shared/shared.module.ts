import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavInicioComponent } from './nav-inicio/nav-inicio.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavInicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports : [
    NavInicioComponent
  ]
})
export class SharedModule { }
