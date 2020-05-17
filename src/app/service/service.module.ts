import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ElectronService} from "./electron/electron.service";
import {RoomService} from "./room/room.service";
import {AuthService} from "./auth/auth.service";
import {UserService} from "./user/user.service";
import {SocketService} from "./socket/socket.service";

@NgModule({
  declarations: [],
  providers: [UserService, ElectronService, RoomService, AuthService, SocketService],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
