import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocketIoComponent } from './socket-io.component';

const routes: Routes = [{ path: '', component: SocketIoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocketIoRoutingModule { }
