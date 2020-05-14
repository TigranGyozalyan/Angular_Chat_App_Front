import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  email: string;
  password: string;

  ngOnInit(): void {
  }

  login(): void {
    this.authService.authorize(this.email, this.password);
  }

}
