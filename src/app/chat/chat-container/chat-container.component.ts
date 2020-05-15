import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {RoomService} from "../../service/rooms/room.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit, OnDestroy {

  input: string;
  messages: Message[];
  roomId: string;
  faPaperPlane = faPaperPlane;
  routerSubscription: Subscription;
  messageSubscription: Subscription;

  constructor(private roomService: RoomService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.route.queryParams
      .subscribe((params) => {
        this.roomId = params['roomId'];
        this.messageSubscription = this.roomService.getMessagesByRoomId(this.roomId)
          .subscribe(messages => {
            console.log('updating messages');
            this.messages = messages;
          });
      })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
