import {ChatRoom} from "./chatRoom";

export interface User {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  rooms : ChatRoom[]
}
