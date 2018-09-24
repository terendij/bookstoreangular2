import { Directive } from '@angular/core';
import {NG_VALIDATORS} from "@angular/forms";
import {AppValidators} from "../validators/app-validators";

@Directive({
  selector: '[appZipcodeValidator],[zipcode]',
  providers:[
    {provide: NG_VALIDATORS, useValue: AppValidators.zipcode, multi: true}
  ]
})
export class ZipcodeValidatorDirective {

  constructor() { }

}
