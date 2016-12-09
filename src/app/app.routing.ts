import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {BookListComponent} from "./book-list/book-list.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'  // full path match
    },
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/:isbn',
        component: BookDetailComponent
    },
    {
        path: '**',
        redirectTo: '/books'  // otherwise
    }
];

export const routing = RouterModule.forRoot(routes);
