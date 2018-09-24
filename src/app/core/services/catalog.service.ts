import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book, JsonBook} from "../model/book";
import {Observable} from "rxjs";
import {delay, map, shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  list$: Observable<Book[]>; // conserver les livres à la première souscription

  constructor(private http: HttpClient, private ngZone: NgZone) {
    this.load();
    this.ngZone.runOutsideAngular(() =>
      setInterval(() => {
        this.ngZone.run(() => this.load());
      },15 * 1000)); // ==> définit une intervale pour recharger les livres)
  }

  getBooks(): Observable<Book[]> {
    return this.list$;
  }

    getBook(id: String): Observable<Book>{
      return this.list$.pipe(
          map(list => list.find(book => book.id === id))
        );
  }

  private load(){
    this.list$ = this.http.get<JsonBook[]>("https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i")
      .pipe(
        map(jsonArray => jsonArray.map(
          json => new Book(json)
          )
        ),
        shareReplay(1) // conserve dans un buffer les éléments qui vont / sont arrivés à la souscriptions ==> un cache
      );
  }

}
