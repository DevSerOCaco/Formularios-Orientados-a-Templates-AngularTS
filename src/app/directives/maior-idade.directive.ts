import { Directive } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator{


  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoAtual = new Date().getFullYear();
    const ehMaior = (anoNascimento +18) <= anoAtual;
    return ehMaior ? null : {'maiorIdadeValidator': true}
  }

}
