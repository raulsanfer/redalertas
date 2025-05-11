import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginPageComponentComponent } from './pages/login-page.component/login-page.component';
=======
import { LoginPageComponentComponent} from './pages/login-page.component/login-page.component.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
>>>>>>> 641799a68cfeb2b6678d3c947e5dd7a9badbe9d8

export const routes: Routes = [ 
    {
    
        path:'',
        component: MainPageComponent,
        children:[
         {
             path:'alertas',
             component:AlertsComponent
         },
        {
            path:'**',
            redirectTo:''
        }]    
    }
];
