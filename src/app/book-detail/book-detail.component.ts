import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BookDataService, Book } from '../shared';
import 'rxjs/add/operator/switchMap';  // handle more than one observables
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'bm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private book;

  constructor(
      private route: ActivatedRoute,
      private bookService: BookDataService)
  {}

  ngOnInit() {
    this.route.params
        .map(params => params['isbn'])
        .distinctUntilChanged()
        .switchMap(isbn => this.bookService.getBookByIsbn(isbn))
          .subscribe(
            book => this.book = book
        );
  }
}
