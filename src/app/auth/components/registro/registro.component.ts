import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


import { AuthService } from '../../services/auth.service';
import { ValidationsService } from '../../services/validations.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formularioRegistro: FormGroup = this._fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this._validationsService.nombreRegExp)]],
    apPat: ['', [Validators.required, Validators.pattern(this._validationsService.nombreRegExp)]],
    email: ['', [Validators.required, Validators.pattern(this._validationsService.emailRegExp)]],
    password: ['', [Validators.required, Validators.pattern(this._validationsService.passRegExp)]],
    passwordC: ['', [Validators.required]]
  }, {
    validators: [this._validationsService.contraseniaIgual('password', 'passwordC')]
  });


  constructor(private _fb: FormBuilder,
    private _validationsService: ValidationsService,
    private _authService: AuthService,
    private _router: Router) { }

  campoValido(campo: string): boolean {
    return this.formularioRegistro.get(campo)!.invalid && this.formularioRegistro.get(campo)!.touched;
  }

  mensajeError(campo: string): string {
    let errores = this.formularioRegistro.get(campo)?.errors;
    return this._validationsService.obtenerMensaje(errores);
  }

  guardar(): void {

    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      Swal.fire({
        title: 'Errores de validación',
        text: 'Al parecer los datos que ingresaste no son como los que esperabamos, por favor, intenta nuevamente',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const { nombre, apPat, email, password } = this.formularioRegistro.value;
    this._authService.registro(nombre, apPat, email, password)
        .subscribe(resp => {
          if(resp === true){
            this._router.navigateByUrl('/dashboard');
          }else{
            Swal.fire('Error de autenticación', resp.error.msg, 'error');
          }
        })

  }

}
