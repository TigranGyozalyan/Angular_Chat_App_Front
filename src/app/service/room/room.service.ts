import {Injectable} from '@angular/core';
import {ChatRoom} from "../../models/chatRoom";
import {Observable, of} from "rxjs";
import {UserService} from "../user/user.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoomService {


  constructor(private userService: UserService) { }

  getRooms(): Observable<ChatRoom[]> {
    return this.userService.getUser()
      .pipe(
        map(user => {
          const rooms = user.rooms;
          rooms.forEach(room => room.thumbNailUri = 'assets/thumbnailpng.png');
          return rooms;
        })
      );
  }
}
