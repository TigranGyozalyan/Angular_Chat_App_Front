import { Injectable } from '@angular/core';
import {ChatRoom} from "../../models/chatRoom";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getRooms() : ChatRoom[] {
    const rooms: ChatRoom[] = [
      {
        roomId: 1,
        roomName: 'Tigran Gyozalyan',
        thumbNailUri: "assets/thumbnailpng.png"
      },
      {
        roomId: 2,
        roomName: 'Room 2',
        thumbNailUri: "assets/thumbnailpng.png"
      },
      {
        roomId: 3,
        roomName: 'Room 3',
        thumbNailUri: "assets/thumbnailpng.png"
      },
    ];
    return rooms;
  }
}
