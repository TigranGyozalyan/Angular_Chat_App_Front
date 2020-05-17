import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {ChatRoom} from "../models/chatRoom";
import {UserService} from "../service/user/user.service";
import {Router} from "@angular/router";
import {catchError, share, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.getUserFromServer()
      .pipe(share())
      .subscribe();
  }
}
