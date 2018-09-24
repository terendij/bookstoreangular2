import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgForm, NgModel} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, switchMap} from "rxjs/operators";
import {CountryService} from "../../core/services/country.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-panier-order',
  templateUrl: './panier-order.component.html',
  styleUrls: ['./panier-order.component.css']
})
export class PanierOrderComponent implements OnInit, AfterViewInit {

  @ViewChild('shippingCountryInfo') shippingCountryInfo: NgModel;

  //View query
  @ViewChild('formInfo') formInfo: NgForm;

  //Variante => On récupère le premier formulaire trouvé
  @ViewChild(NgForm) formInfo2: NgForm;

  countryList$: Observable<string[]>;

  data = {
    identity: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    },
    shipping: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    billing: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    distinctBilling: false
  };

  constructor(private title: Title, private serviceCountry: CountryService) { }

  ngOnInit() {
    this.title.setTitle('Commande');
  }

  onSubmit(){
    console.log(this.data);
  }

  logFormInfo() {
    console.log(this.formInfo);
  }

  ngAfterViewInit(): void {
    this.countryList$ = this.shippingCountryInfo.valueChanges.pipe(
      filter(name => name && name.trim().length >= 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(
        name => this.serviceCountry.search(name)
      )
    );
  }
}
