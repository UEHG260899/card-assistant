import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from 'rxjs';

import { Usuario, AuthResponse } from '../interfaces/auth-interface';


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
                catchError(err => of(err.errors.msg))
              );
  }

  registro(nombre: string, apPat: string, email: string, password: string){
    const url: string = `${this._baseURL}/auth/new`;
    const body = { nombre, apPat, email, password };
    return this._http.post<AuthResponse>(url, body)
          .pipe(
            tap(resp => {
              if(resp.ok){
                localStorage.setItem('token', resp.token!);
              }
            }),
            map(resp => resp.ok),
            catchError(err => of(err.msg))
          )
  }

  validarToken(): Observable<boolean>{
    const url = `${this._baseURL}/auth/renew`;
    const headers = new HttpHeaders()
        .set('x-token', localStorage.getItem('token') || '');
    return this._http.get<AuthResponse>(url , {headers})
          .pipe(
            map(resp => {
              localStorage.setItem('token', resp.token!);
              this._user = {
                nombre : resp.nombre!,
                uid : resp.uid!,
                email : resp.email!
              }
              return resp.ok;
            }),
            catchError(err => of(err.msg))
          )
  }
}
