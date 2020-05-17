import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../../models/message";
import {User} from "../../../models/user";
import {UserService} from "../../../service/user/user.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input()
  message: Message;

  fromMe: boolean;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fromMe = this.userService.getUserValue()._id === this.message.byUser;
  }

}
