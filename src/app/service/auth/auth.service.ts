import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {AppConfig} from "../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  SERVER_URL: string = AppConfig.SERVER_URL;

  constructor(private http: HttpClient, private router: Router) { }

  authorize(email: string, password: string): void {

    const url = `${this.SERVER_URL}/login`;

    const body = {
      email,
      password
    };

    console.log(url);
    console.log('about to send');

    this.http.post<void>(url, body, {observe: 'response'})
      .subscribe((res) =>{
        console.log(res.headers.get("Authorization"));
        this.router.navigate(['chat']);
      });
  }

  register(user: User) {

    const url = `${this.SERVER_URL}/user`;

    this.http.post<void>(url, user, {observe: 'response'})
      .subscribe((res) =>{
        console.log(res.status);
      });
  }
}
