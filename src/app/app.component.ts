import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./models/user";
import {UserService} from "./service/user/user.service";
import {ChatRoom} from "./models/chatRoom";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }

}
