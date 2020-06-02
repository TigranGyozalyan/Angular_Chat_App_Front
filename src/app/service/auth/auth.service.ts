import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AppConfig} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {publishReplay, tap} from "rxjs/operators";
import {UserPrincipal} from "../../models/principal";
import {UserRegister} from "../../models/userRegister";
import {SocketService} from "../socket/socket.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  SERVER_URL: string = AppConfig.SERVER_URL;
  jwtToken = '';

  constructor(private http: HttpClient, private router: Router) { }

  authorize(user: UserPrincipal): Observable<HttpResponse<void>> {

    const url = `${this.SERVER_URL}/login`;
    return this.http.post<void>(url, user, {observe: 'response'})
      .pipe(
        tap((res) => {
            this.jwtToken = res.headers.get('Authorization');
            this.router.navigate(['chat']);
          },
          publishReplay()
        )

      );
  }

  register(user: UserRegister): Observable<HttpResponse<void>> {

    const url = `${this.SERVER_URL}/user`;

    return this.http.post<void>(url, user, {observe: 'response'})
      .pipe(
        tap((res) => {
            this.jwtToken = res.headers.get('Authorization');
            this.router.navigate(['../login']);
          },
          publishReplay()
        )
      );
  }

  logOut(): void {
    const url = `${this.SERVER_URL}/logout`;
    this.http.post<void>(url, {}).toPromise()
      .then(() => {
        this.router.navigate(['../auth']);
      })
  }

  getAuthToken() {
    return this.jwtToken;
  }
}
