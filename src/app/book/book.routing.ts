import {Routes, RouterModule} from '@angular/router';
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookComponent} from "./book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {ModuleWithProviders} from '@angular/core';

export const bookRoutes: Routes = [
    {
        path: 'books',
        component: BookComponent,
        children: [{
            path: '',
            component: BookListComponent
        },
        {
            path: ':isbn',
            component: BookDetailComponent
        }]
    }
];

export const bookRouting: ModuleWithProviders = RouterModule.forChild(bookRoutes);
