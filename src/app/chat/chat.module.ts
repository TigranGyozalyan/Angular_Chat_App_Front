import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChatRoutingModule} from './chat-routing.module';

import {ChatComponent} from './chat.component';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SidebarComponent} from "./sidebar/sidebar.component";
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageComponent } from './messages/message/message.component';
import { ChatRoomComponent } from './sidebar/chat-room/chat-room.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RoomListComponent } from './sidebar/room-list/room-list.component';

@NgModule({
  declarations: [ChatComponent, SidebarComponent, ChatContainerComponent, MessageListComponent, MessageComponent, ChatRoomComponent, RoomListComponent],
  imports: [CommonModule, SharedModule, ChatRoutingModule, NgbModule, FontAwesomeModule]
})
export class ChatModule { }
