import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  search(name: string): Observable<string[]>{
    name = name && name.trim();
    if(name) {
      return this.http.get<Country[]>('https://restcountries.eu/rest/v2/name/'+name).pipe(
        map(countries => countries.map(country => country.translations.fr)),
        catchError(error => of([])) // pour ne pas casser l'observable
      );
    } else {
      return of([]);
    }
  }
}

interface Country {
  name: string,
  translations: {
    fr: string
  }
}
