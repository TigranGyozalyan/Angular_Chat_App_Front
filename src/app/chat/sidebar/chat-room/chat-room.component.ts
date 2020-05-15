import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
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
  selectedRoomId: string;

  constructor() { }

  ngOnInit(): void { }
}
