import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../services/rooms/room.service";
import {ChatRoom} from "../../models/chatRoom";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  roomService: RoomService;
  rooms: ChatRoom[];
  selectedRoomId: number = 1;

  constructor(roomService: RoomService) {
    this.roomService = roomService;
  }

  ngOnInit(): void {
    this.rooms = this.roomService.getRooms();
  }

  selectRoom(id: number): void {
    console.log('recived room id');
    this.selectedRoomId = id;
  }
}
