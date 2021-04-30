import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  get usuario(): string{
    return this._authServce.usuario.nombre;
  }

  constructor(private _authServce: AuthService) { }

  ngOnInit(): void {
  }

}
