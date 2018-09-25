import { Routes, RouterModule } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { FlightRequestComponent } from './components/flight-request/flight-request.component';
import { FlightRequestListComponent } from './components/flight-request-list/flight-request-list.component';

const router: Routes = [

  {

    path: 'home',
    component: AppComponent,
    data: {
      title: 'Home'
    }
  },
  {

    path: 'login',
    component: LoginUserComponent,
    data: {
      title: 'Login'
    }
  },

  {

    path: 'flightRequest',
    component: FlightRequestComponent,
    data: {
      title: 'Flights'
    }
  },

  {

    path: 'flightRequestList',
    component: FlightRequestListComponent,
    data: {
      title: 'Flights'
    }
  },


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {
  // enableTracing: true, // <-- debugging purposes only

});
