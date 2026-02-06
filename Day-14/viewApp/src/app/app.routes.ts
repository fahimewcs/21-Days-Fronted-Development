import { Routes } from '@angular/router';
import { Home } from './home/home';
import { authGuard } from './authenticate/auth-guard';

export const routes: Routes = [

    {path: '', component:Home},

    {path:'contact', loadComponent: () => import('./contact/contact').then(m=>m.Contact)},
    {path:'signup', loadComponent: ()=>import('./signup/signup').then(m=>m.Signup)},
    {path:'login', loadComponent: () => import('./login/login').then(m=>m.Login)},
    {path:'dashboard', loadComponent: () => import('./dashboard/dashboard').then(m=>m.Dashboard),
        canActivate:[authGuard]
    },

    

];
