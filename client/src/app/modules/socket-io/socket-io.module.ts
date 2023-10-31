import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketIoRoutingModule } from './socket-io-routing.module';
import { SocketIoComponent } from './socket-io.component';


@NgModule({
  declarations: [
    SocketIoComponent
  ],
  imports: [
    CommonModule,
    SocketIoRoutingModule
  ]
})
export class SocketIoModule { }
