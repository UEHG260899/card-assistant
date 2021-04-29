import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../../services/validations.service';
import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login-component.css']
})
export class LoginComponent {


  loginFormulario: FormGroup = this._fb.group({
    email : ['', [Validators.required, Validators.pattern(this._validationService.emailRegExp)]],
    password : ['', [Validators.required, Validators.pattern(this._validationService.passRegExp)]]
  })

  constructor(private _fb: FormBuilder,
              private _validationService: ValidationsService,
              private _authService: AuthService,
              private _router: Router) { }


  campoValido(campo : string){
    return this.loginFormulario.get(campo)!.invalid && this.loginFormulario.get(campo)!.touched;
  }

  mensajeError(campo : string): string{
    let errores = this.loginFormulario.get(campo)?.errors;
    return this._validationService.obtenerMensaje(errores);
  }

  ingresar(): void{
    if(this.loginFormulario.invalid){
      this.loginFormulario.markAllAsTouched();
      Swal.fire({
        title : 'Error de validación',
        text : 'Al parecer los datos que ingresaste no son como los que esperabamos, por favor, intenta nuevamente',
        icon : 'error',
        confirmButtonText : 'Aceptar'
      });
      return;
    }

    const {email, password} = this.loginFormulario.value;
    this._authService.login(email, password)
      .subscribe(valido => {
        if(valido === true){
          this._router.navigateByUrl('/dashboard');
        }else{
          Swal.fire('Error de autenticación', valido, 'error')
        }
      });
  }

}
