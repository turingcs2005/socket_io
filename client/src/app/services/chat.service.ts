import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  baseUrl = environment.baseUrl;
  message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  socket = io(this.baseUrl);

  sendMessage(message: any) {
    console.log('sendMessage: ', message);
    this.socket.emit('message', message);
  }

  getNewMessage = () => { // use arrow function to access message$
    this.socket.on('message', (message) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  }

}
