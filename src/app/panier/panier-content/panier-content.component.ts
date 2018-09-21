import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../core/services/panier.service";
import {PanierRow} from "../../core/model/panier";
import {CatalogService} from "../../core/services/catalog.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-panier-content',
  templateUrl: './panier-content.component.html',
  styleUrls: ['./panier-content.component.css']
})
export class PanierContentComponent implements OnInit {

  constructor(public panier: PanierService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Panier');
  }

  deleteRowToCart(row: PanierRow) {
    this.panier.deleteLign(row);
  }

}
