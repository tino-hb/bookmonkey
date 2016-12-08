import { Injectable } from '@angular/core';

// data model for books
import {Book} from './book'
import {Observable} from "rxjs";
import {Http} from'@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookDataService {

  private readonly books;

  constructor(
      private http:Http
  ) {}

  getBooks():  Observable<Book[]> {
    return this.http
        .get('http://localhost:4730/books')
        .map(response => response.json());
  }
}
