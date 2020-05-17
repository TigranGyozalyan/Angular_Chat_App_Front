import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../../models/user";
import {AppConfig} from "../../../environments/environment";
import {BehaviorSubject, Observable, of} from "rxjs";
import {catchError, publishReplay, tap} from "rxjs/operators";
import {Router} from "@angular/router";
import {SocketService} from "../socket/socket.service";
import {Message} from "../../models/message";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  SERVER_URL: string = AppConfig.SERVER_URL;

  private user = new BehaviorSubject<User>({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    rooms: []
  });

  constructor(private http: HttpClient, private router: Router, private socketService: SocketService) { }

  getUserFromServer(): Observable<User> {

    const url = `${this.SERVER_URL}/user`;

    return this.http.get<User>(url, {observe: 'body'})
      .pipe(
        tap((user) => {
            this.user.next(user);
            this.socketService.connect();

            this.socketService.listen<Message>('success')
              .subscribe((message) => {
                let updatedUser = {...this.user.getValue()};
                const roomIndex = updatedUser.rooms.findIndex(room => room._id === message.roomId);
                updatedUser.rooms[roomIndex].messages.push(message);
                this.user.next(updatedUser);
              })

            this.socketService.emit('join', user.rooms.map(room => room._id))
          }, (err) => {
            if (err.status === 403) {
              this.socketService.disconnect();
              this.router.navigate(['auth']);
            }
          }
        ),
      );
  }

  getUser(): BehaviorSubject<User> {
    return this.user;
  };


  getUserValue(): User {
    return this.user.getValue();
  }
}
