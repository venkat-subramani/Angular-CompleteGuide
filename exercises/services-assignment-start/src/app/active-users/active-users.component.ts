import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  counter: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
    this.counter = this.counterService.inactiveToActiveCounter;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
