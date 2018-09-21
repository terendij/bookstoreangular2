import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../core/model/book";

@Component({
  selector: 'app-catalog-list-item,tr.app-catalog-list-item',
  templateUrl: './catalog-list-item.component.html',
  styleUrls: ['./catalog-list-item.component.css']
})
export class CatalogListItemComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
