import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import {LoginComponent} from "./auth/login/login.component";
import {ChatComponent} from "./chat/chat.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AuthContainerComponent} from "./auth/auth-container/auth-container.component";

const routes: Routes = [

  {
    path: 'auth',
    component: AuthContainerComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'chat',
    component: ChatComponent,

  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
