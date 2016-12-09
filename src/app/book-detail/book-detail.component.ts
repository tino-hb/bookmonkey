import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { BookDataService, Book } from '../shared';
import 'rxjs/add/operator/switchMap';  // handle more than one observables

@Component({
  selector: 'bm-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  private book:Book;

  constructor(
      private route: ActivatedRoute,
      private bookService: BookDataService)
  {}

  ngOnInit() {
    this.route.params
        .switchMap(params => this.bookService.getBookByIsbn(params['isbn']))
          .subscribe(
            book => this.book = book
        );
  }
}
