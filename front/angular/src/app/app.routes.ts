import { Routes } from '@angular/router';
import { LoginPageComponentComponent } from './pages/login-page.component/login-page.component.component';

export const routes: Routes = [ 
    {
    
        path:'',
        component: LoginPageComponentComponent,
        children:[
        // {
        //     path:'generales',
        //     component:ByCapitalPageComponent
        // },
        {
            path:'**',
            redirectTo:''
        }]    
    }
];
