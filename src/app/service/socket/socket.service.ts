import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import {AppConfig} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;
  readonly SERVER_URL: string = AppConfig.SERVER_URL;

  constructor() {
    this.socket = io(this.SERVER_URL);
  }

  connect() {
    console.log('about to connect')
    this.socket.connect();
  }

  disconnect() {
    console.log('about to disconnect')
    this.socket.disconnect();
  }

  emit<T>(eventName: string, data: T) {
    this.socket.emit(eventName, data);
  }

  listen<T>(eventName: string): Observable<T> {
    return new Observable<T>(subscriber => {
      this.socket.on(eventName, data => {
        subscriber.next(data);
      })
    })
  }
}
