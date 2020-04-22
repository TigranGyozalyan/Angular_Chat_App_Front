import { Injectable } from '@angular/core';
import {Message} from "../../message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessageList() : Message[] {
    return [
      {
        content: 'First message',
        id: 1,
        fromMe: true
      },
      {
        content: 'Second message',
        id: 2,
        fromMe: false
      },
      {
        content: 'Third Really Really Really Really Really Really Really Really Really long message',
        id: 3,
        fromMe: true
      },
      {
        content: 'Fourth message',
        id: 4,
        fromMe: true
      },
    ]
  }
}
