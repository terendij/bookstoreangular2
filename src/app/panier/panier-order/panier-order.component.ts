import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-panier-order',
  templateUrl: './panier-order.component.html',
  styleUrls: ['./panier-order.component.css']
})
export class PanierOrderComponent implements OnInit {

  //View query
  @ViewChild('formInfo') formInfo: NgForm;

  //Variante => On récupère le premier formulaire trouvé
  @ViewChild(NgForm) formInfo2: NgForm;

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

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Commande');
  }

  onSubmit(){
    console.log(this.data);
  }

  logFormInfo() {
    console.log(this.formInfo);
  }
}
