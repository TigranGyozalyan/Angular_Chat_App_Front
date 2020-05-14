import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ElectronService} from "./electron/electron.service";
import {MessageService} from "./message/message.service";
import {RoomService} from "./rooms/room.service";
import {AuthService} from "./auth/auth.service";

@NgModule({
  declarations: [],
  providers: [ElectronService, MessageService, RoomService, AuthService],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
