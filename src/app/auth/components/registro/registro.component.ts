import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations.service';
import Swal from 'sweetalert2'

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
    private _validationsService: ValidationsService) { }

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

    console.log(this.formularioRegistro.value);

  }

}
