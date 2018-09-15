import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerId() {
    return this.serverId;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'alert-success col-md-4 alert text-center' : 'alert-danger col-md-4 alert text-center';
  }
}
