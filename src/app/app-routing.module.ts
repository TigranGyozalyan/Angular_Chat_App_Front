import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import {LoginComponent} from "./auth/login/login.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
