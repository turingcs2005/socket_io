import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ]
})
export class ChatComponent {
  newMessage = '';
  messageList: string[] = [];

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.getNewMessage().subscribe({
      next: (message: string) => {
        this.messageList.push(message);
      }
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}
