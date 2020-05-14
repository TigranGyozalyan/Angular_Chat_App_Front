import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../service/message/message.service";
import {Message} from "../../models/message";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit {

  input: string;
  messageService: MessageService;
  messages: Message[];
  faPaperPlane = faPaperPlane;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  ngOnInit(): void {
    this.messages = this.messageService.getMessageList();
  }

}
