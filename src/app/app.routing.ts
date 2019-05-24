
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './core/components/customer/customer.component';
import { RegisterComponent } from './core/components/register/register.component'


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },  
    { path: 'home', component: HomeComponent},
    { path: 'customer' ,component:CustomerComponent},
    { path: 'register' ,component:RegisterComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);