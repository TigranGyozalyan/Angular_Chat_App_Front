import {Component, OnDestroy, OnInit} from '@angular/core';
import {RoomService} from "../../service/rooms/room.service";
import {ChatRoom} from "../../models/chatRoom";
import {filter} from "rxjs/operators";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs";

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

  constructor(private roomService: RoomService, private route: ActivatedRoute) {
    this.roomService = roomService;
  }

  ngOnInit(): void {
    this.roomSubscription = this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    });

    this.paramSubscription = this.route.queryParams.subscribe(params => {
      console.log(`updated room id with value ${params['roomId']}`);
      this.selectedRoomId = params['roomId'];
    });
  }

  ngOnDestroy(): void {
    this.roomSubscription.unsubscribe();
    this.paramSubscription.unsubscribe();
  }
}
