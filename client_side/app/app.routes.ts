import { provideRouter, RouterConfig }  from '@angular/router';
import { UserRegistrationComponent } from './user_registration/user_reg.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: RouterConfig = [
   {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user_reg',
    component: UserRegistrationComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];