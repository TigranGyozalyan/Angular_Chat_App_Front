import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {RoomService} from "../../service/room/room.service";
import {ChatRoom} from "../../models/chatRoom";
import {filter, tap} from "rxjs/operators";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {UserService} from "../../service/user/user.service";
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  rooms: ChatRoom[];


  selectedRoomId: string = '';
  roomSubscription: Subscription;
  paramSubscription: Subscription;

  constructor(private authService: AuthService, private roomService: RoomService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomSubscription =  this.roomService.getRooms()
      .subscribe(rooms => {
        console.log(rooms);
        this.rooms = rooms;
      })

    this.paramSubscription = this.route.queryParams.subscribe(params => {
      console.log(`updated room id with value ${params['roomId']}`);
      this.selectedRoomId = params['roomId'];
    });
  }

  logOut() {
    this.authService.logOut();
  }

  ngOnDestroy(): void {
    this.roomSubscription.unsubscribe();
    this.paramSubscription.unsubscribe();
  }
}
