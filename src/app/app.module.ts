import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import 'hammerjs';
import {CdkTableModule} from '@angular/cdk/table';
import { CurrencyPipe } from '@angular/common';

import { TestComponent } from './components/test/test.component';
import { HttpModule } from '@angular/http';
import { FlightRequestComponent } from './components/flight-request/flight-request.component';
import { FlightManagementComponent } from './components/flight-management/flight-management.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { FlightRequestListComponent } from './components/flight-request-list/flight-request-list.component';
import { routes } from './app.router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FlightRequestComponent,
    FlightManagementComponent,
    LoginUserComponent,
    FlightRequestListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
