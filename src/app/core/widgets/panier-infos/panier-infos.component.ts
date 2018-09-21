import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-panier-infos',
  templateUrl: './panier-infos.component.html',
  styleUrls: ['./panier-infos.component.css']
})
export class PanierInfosComponent implements OnInit {

  constructor(public panier: PanierService) { }

  ngOnInit() {
  }

}
