import {Component, OnDestroy, OnInit} from '@angular/core';
import {Message} from "../../models/message";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {flatMap, tap} from "rxjs/operators";
import {Subscription} from "rxjs";
import {UserService} from "../../service/user/user.service";
import {MessageService} from "../../service/message/message.service";
import {SocketService} from "../../service/socket/socket.service";


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

  constructor(private messageService: MessageService,
              private route: ActivatedRoute,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.route.queryParams
      .pipe(
        tap(params => {
            this.input = '';
            this.roomId = params['roomId'];
          }
        ),
        flatMap((params) => {
          return this.messageService.getMessagesByRoomId(params['roomId']);
        })
      )
      .subscribe((messages) => {
        this.messages = messages;
      })
  }

  send() {
    if (this.input.trim()) {
      const message: Message = {
        content: this.input,
        postedAt: new Date(Date.now()),
        byUser: this.userService.getUserValue()._id,
        roomId: this.roomId
      }
      this.messageService.sendMessage(message);
      this.input = ''
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
