import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from "rxjs/operators";

import { Usuario, AuthResponse } from '../interfaces/auth-interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseURL: string = environment.baseURL;
  private _user!: Usuario;

  get usuario(){
    return {...this._user};
  }

  constructor(private _http: HttpClient) { }

  login(email : string, password : string){
    const url: string = `${this._baseURL}/auth`;
    const body = { email, password };
    return this._http.post<AuthResponse>(url, body)
              .pipe(
                tap(resp => {
                  if(resp.ok){
                    localStorage.setItem('token', resp.token!);
                  }
                }),
                map(resp => resp.ok),
                catchError(err => of(err.error.msg))
              );
  }
}
