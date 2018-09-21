import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs/operators";
import {CatalogService} from "../../core/services/catalog.service";
import {Observable} from "rxjs";
import {Book, JsonBook} from "../../core/model/book";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-catalog-book',
  templateUrl: './catalog-book.component.html',
  styleUrls: ['./catalog-book.component.css']
})
export class CatalogBookComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private bookservice: CatalogService, private route: ActivatedRoute, private title: Title) { }

  ngOnInit() {
    this.book$ = this.route.paramMap.pipe(
      switchMap(params => this.bookservice.getBook(params.get('id'))),
      tap(book => this.title.setTitle('Livre : '+book.title))
    );
  }


}
