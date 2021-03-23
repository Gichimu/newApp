import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { SocketService } from '../services/socket/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  msg: string;

  constructor(
    private socketService: SocketService,
    private snackbar: MatSnackBar
  ) {}

  chatMessages = this.socketService.chatMessages;
  chatMessage$ = from(this.chatMessages);

  ngOnInit(): void {
    $('#action_menu_btn').click(function () {
      $('.action_menu').toggle();
    });

    this.socketService.getMessage();

    console.log(this.chatMessages);
  }

  sendMessage() {
    this.socketService.sendMessage(this.msg);
  }
}
