import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChatRoom} from "../../../models/chatRoom";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  @Input()
  room: ChatRoom;

  @Input()
  selectedRoomId: number;
  @Output("selectRoom")
  selectedRoomIdChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  selectRoom(id: number) : void {
    console.log('Sent room id');
    this.selectedRoomIdChange.emit(id);
  }
}
