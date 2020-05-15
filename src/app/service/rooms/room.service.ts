import {Injectable} from '@angular/core';
import {ChatRoom} from "../../models/chatRoom";
import {Observable, of} from "rxjs";
import {Message} from "../../models/message";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: ChatRoom[] = [
    {
      roomId: '1',
      roomName: 'Tigran Gyozalyan',
      thumbNailUri: "assets/thumbnailpng.png",
      messages: [
        {
          id: 'asd',
          fromMe: true,
          content: 'From room 1',
        },
        {
          id: 'asd',
          fromMe: false,
          content: 'From room 1',
        },
        {
          id: 'asd',
          fromMe: false,
          content: 'From room 1',
        },
      ]
    },
    {
      roomId: '2',
      roomName: 'Room 2',
      thumbNailUri: "assets/thumbnailpng.png",
      messages: [
        {
          id: 'asd',
          fromMe: true,
          content: 'From room 2',
        },
      ],
    },
    {
      roomId: '3',
      roomName: 'Room 3',
      thumbNailUri: "assets/thumbnailpng.png",
      messages: [
        {
          id: 'asd',
          fromMe: false,
          content: 'From room 3',
        },
        {
          id: 'asd',
          fromMe: true,
          content: 'From room 3',
        },
      ],
    },
  ]

  constructor() {
  }

  getRooms(): Observable<ChatRoom[]> {
    return of(this.rooms);
  }

  getMessagesByRoomId(roomId: string): Observable<Message[]> {
    return of(this.rooms.find(room => room.roomId === roomId).messages)
  }
}
