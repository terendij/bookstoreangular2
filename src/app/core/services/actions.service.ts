import { Injectable } from '@angular/core';
import {PanierService} from "./panier.service";
import {Router} from "@angular/router";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private cart: PanierService, private router:Router) {

  }

  buyBook(book: Book){
    this.cart.addBook(book);
    //this.router.navigate((['/panier/content']))
  }
}
