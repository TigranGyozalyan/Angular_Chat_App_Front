import { User } from "./user";
import {Message} from "./message";

export interface ChatRoom {
  roomId: string,
  roomName: string,
  thumbNailUri: string,
  messages: Message[]
}
