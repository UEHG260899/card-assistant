import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styles: [
    
  ]
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink : "inicio" },
      { label: 'Información General', icon: 'pi pi-fw pi-calendar', routerLink : "general" },
      { label: 'Mis Tarjetas', icon: 'pi pi-fw pi-credit-card' },
      { label: 'Recordatorios', icon: 'pi pi-fw pi-calendar' },
      { label: 'Salir', icon: 'pi pi-fw pi-sign-out' }
    ];
  }

}
