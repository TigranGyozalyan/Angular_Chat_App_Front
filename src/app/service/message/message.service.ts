import { Injectable } from '@angular/core';
import {RoomService} from "../room/room.service";
import {UserService} from "../user/user.service";
import {find, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Message} from "../../models/message";
import {SocketService} from "../socket/socket.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private userService: UserService,
              private roomService: RoomService,
              private socketService: SocketService) { }

  getMessagesByRoomId(id: string): Observable<Message[]> {
    return this.roomService.getRooms().pipe(
      map((rooms) => {
        const room = rooms.find(room => room._id === id);
        if(room) {
          return room.messages;
        }
        return [];
      })
    );
  }

  sendMessage(message: Message) {
    this.socketService.emit<Message>('send', message);
  }
}
