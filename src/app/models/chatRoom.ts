import { User } from "./user";
import {Message} from "./message";

export interface ChatRoom {
  _id: string,
  roomName: string,
  thumbNailUri: string,
  messages: Message[],
  users?: User[]
}
