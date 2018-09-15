import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },3000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    alert('Server Created Successfully!');
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
