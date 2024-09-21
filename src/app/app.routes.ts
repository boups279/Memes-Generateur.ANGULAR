import { Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './home/home.component';
import { guardGuard } from './services/guard/guard.guard';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate: [guardGuard] },
    { path: '', redirectTo: '/HomeComponent', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
  ];

  export { routes };