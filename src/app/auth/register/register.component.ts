import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {User} from "../../models/user";
import {UserRegister} from "../../models/userRegister";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  ngOnInit(): void {
    this.lastName = '';
  }

  register(): void {

    const user: UserRegister = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }
    this.authService.register(user)
      .subscribe(() => {
      });
  }
}
