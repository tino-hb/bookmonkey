import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'  // full path match
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
