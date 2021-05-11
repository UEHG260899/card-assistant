import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {


  get usuario(){
    return this._authService.usuario;
  }


  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

}
