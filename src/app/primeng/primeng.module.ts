import { NgModule } from '@angular/core';


//Elementos de primeNG
import {ButtonModule} from 'primeng/button'
import { CardModule } from "primeng/card";
import {MenubarModule} from 'primeng/menubar'




@NgModule({
  exports : [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimengModule { }
