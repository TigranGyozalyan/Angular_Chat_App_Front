import {User} from "./user";

export interface Message {
  content: string,
  id: string,
  fromMe: boolean,
  byUser?: User
}
