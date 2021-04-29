import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  public nombreRegExp = '^[a-zA-ZáéíóúÁÉÍÓÚ]{2,30}$';
  public emailRegExp = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  public passRegExp  = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$";
  errores : string = '';

  constructor() { }

  contraseniaIgual(pass : string, passC : string){
    return(formGroup : AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(pass)?.value;
      const pass2 = formGroup.get(passC)?.value;
      if(pass1 !== pass2){
        formGroup.get(passC)?.setErrors({noIguales : true});
        return ( {noIguales : true} );
      }else{
        formGroup.get(passC)?.setErrors(null);
      }

      return null;
    }
  }

  obtenerMensaje(errores: any): string{

    if(errores.required){
      return 'Este campo es obligatorio';
    }else if (errores.pattern){
      return 'El texto no coincide con el formato';
    }else if(errores.noIguales){
      return 'Las contraseñas no coinciden';
    }
    return '';
  }
  
}
