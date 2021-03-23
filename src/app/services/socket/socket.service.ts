import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  chatMessages: string[] = [];
  uri = 'http://localhost:3000';
  socket = io(this.uri);
  constructor() {}

  getMessage() {
    this.socket.on('message', (message) => {
      this.chatMessages.push(message);
    });
  }

  sendMessage(msg: string) {
    this.socket.emit('chatMessage', msg);
  }
}
