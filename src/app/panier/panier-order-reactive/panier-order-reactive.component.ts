import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AppValidators} from "../../core/validators/app-validators";

@Component({
  selector: 'app-panier-order-reactive',
  templateUrl: './panier-order-reactive.component.html',
  styleUrls: ['./panier-order-reactive.component.css']
})
export class PanierOrderReactiveComponent implements OnInit {

  submitted: boolean = false;

  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  distinctBilling: FormControl;
  billing: FormGroup;

  ngOnInit() {
    this.distinctBilling = this.fb.control(false);
    this.identity = this.fb.group({
      firstName: '',
      lastName: ['', {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ]
      }],
      email: ['', AppValidators.email('sada.fr')],
      phone: ''
    });
    this.shipping = this.buildAdresse();
    this.billing = this.buildAdresse();
    this.form = new FormGroup({
      identity: this.identity,
      shipping: this.shipping,
      distinctBilling: this.distinctBilling
    });

    this.form.patchValue( {
      identity: {
        lastName: 'tete',
      },
      shipping: {
        street: 'sdfs',
      },
      distinctBilling: false
    });
  }

  constructor(private fb: FormBuilder){

  }

  private buildAdresse(): FormGroup{
    return new FormGroup({
      street: new FormControl(),
      zip: new FormControl('', {
        validators: [
          Validators.required,
          AppValidators.zipcode
        ]
      }),
      city: new FormControl('', {
        validators: [
          Validators.required
        ]
      }),
      country: new FormControl()
    });
  }

  showDistinctBillingAdresse(){
    return this.distinctBilling.value;
  }

  onToggleChecbox(){
    if(this.showDistinctBillingAdresse()){
      this.form.addControl('billing', this.billing);
    } else {
      this.form.removeControl('billing');
    }
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  isButtonSubmitDisabled(): boolean{
    return this.form.invalid && this.submitted;
  }

  private save(){
    if(this.form.valid){
      console.log(this.form.value);
    }
  }

}
