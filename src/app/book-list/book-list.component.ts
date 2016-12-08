import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../shared';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  private books;

  constructor(
      private bookService: BookDataService
  ) {}

  ngOnInit() {
      this.bookService
          .getBooks()
          .subscribe(
              books => this.books = books
          );
  }
}
