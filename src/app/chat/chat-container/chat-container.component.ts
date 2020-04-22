import { Component, OnInit } from '@angular/core';
import {MessageService} from "../messages/message.service";
import {Message} from "../../message";

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {

  input: string;
  messageService: MessageService;
  messages: Message[];

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  ngOnInit(): void {
    this.messages = this.messageService.getMessageList();
  }

}
