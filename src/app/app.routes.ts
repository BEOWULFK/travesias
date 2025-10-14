import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Detail } from './views/detail/detail';
import { Login } from './views/login/login';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'detalle/:id',
        component: Detail
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '**',
        redirectTo: ''
    }
];
