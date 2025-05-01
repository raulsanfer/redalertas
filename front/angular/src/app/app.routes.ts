import { Routes } from '@angular/router';
import { LoginPageComponentComponent} from './pages/login-page.component/login-page.component.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AlertsComponent } from './pages/alerts/alerts.component';

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
