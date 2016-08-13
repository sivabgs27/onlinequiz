import { provideRouter, RouterConfig }  from '@angular/router';
import { UserRegistrationComponent } from './user_registration/user_reg.component';
import { LoginComponent } from './login/login.component';
import { ForgetPassword} from './forget_password/forget_password.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminLoginComponent} from './admin_login/admin_login.component';
import {AdminDashboardComponent} from './admin_dashboard/admin_dashboard.comonent';
import { AppComponent } from './app.component';
import { AuthGuard } from './common/auth.guard';

const routes: RouterConfig = [
  {
     path: '', redirectTo: 'login', terminal: true 
  },

  {
    path: 'login',
    component: LoginComponent,
    
    
  },
  {
    path: 'admin_login',
    component: AdminLoginComponent
  },
  {
    path: 'user_reg',
    component: UserRegistrationComponent
  },
  {
     path: 'forget_password',
    component: ForgetPassword
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'admin_dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard] 
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
