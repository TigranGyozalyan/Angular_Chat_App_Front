export interface Message {
  _id?: string,
  content: string,
  byUser: string,
  postedAt: Date,
  roomId: string
}
