import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';

// module routing
import {bookRouting} from "./book.routing";

// Components
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

// Services
import {BookDataService} from "./shared/book-data.service";

@NgModule({
  imports: [
    CommonModule,
    bookRouting
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent
  ],
  providers: [
    BookDataService
  ]
})
export class BookModule { }
