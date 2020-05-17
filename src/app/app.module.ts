import 'reflect-metadata';
import '../polyfills';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {ServiceModule} from "./service/service.module";

import {AppRoutingModule} from './app-routing.module';

import {ChatModule} from './chat/chat.module';

import {AppComponent} from './app.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthContainerComponent} from './auth/auth-container/auth-container.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {httpInterceptorProviders} from "./interceptor";


@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, AuthContainerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceModule,
    SharedModule,
    ChatModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [ httpInterceptorProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
