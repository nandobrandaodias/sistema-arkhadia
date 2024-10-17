import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { SheetComponent } from './modules/sheets/sheet/sheet.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: ()=>import('./modules/home/home/home.routes').then(m=>m.routes)
    },
    {
        path: 'sheet/:id',
        component: SheetComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '*',
        redirectTo: ''
    }
];
