import {Component, Input, OnInit} from '@angular/core';
import {ChatRoom} from "../../../models/chatRoom";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {


  @Input()
  rooms: ChatRoom[];

  @Input()
  selectedRoomId: string;

  constructor() { }

  ngOnInit(): void {

  }

}
