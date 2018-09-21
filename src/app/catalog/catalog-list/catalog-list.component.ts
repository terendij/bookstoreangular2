import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CatalogService} from "../../core/services/catalog.service";
import {Book} from "../../core/model/book";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  @Output("addBookEvent")
  addBookEvent = new EventEmitter<Book>();

  error: any;
  booksList$: Observable<Book[]>;

  constructor(private bookService: CatalogService, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Catalogue');

    this.booksList$ = this.bookService.getBooks().pipe(
      catchError(error => {
          this.error = error;
          return of([])
        }
      )
    );
  }

}
