import { Injectable } from '@angular/core';
import {Book} from "../model/book";
import {Panier, PanierRow} from "../model/panier";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier:Panier;

  constructor() {
    this.panier = new Panier();
  }

  addBook(book: Book){
    this.panier.addBook(book);
  }


  deleteLign(row: PanierRow) {
    this.panier.deleteLigne(row);
  }

  isEmpty(){
    return this.panier.liste.length == 0;
  }
}
