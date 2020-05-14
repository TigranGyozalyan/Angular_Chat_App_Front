import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import {AppConfig} from "../../../environments/environment";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  SERVER_URL: string = AppConfig.SERVER_URL;

  constructor(private http: HttpClient) { }


  authorize(email: string, password: string): void {

    const url = `${this.SERVER_URL}/login`;

    const body = {
      email,
      password
    };

    console.log(url);
    console.log('about to send');

    this.http.post<any>(url, body, {observe: 'response'})
      .subscribe((res) =>{
        console.log(res.headers.get("Authorization"));
      });
  }
}
