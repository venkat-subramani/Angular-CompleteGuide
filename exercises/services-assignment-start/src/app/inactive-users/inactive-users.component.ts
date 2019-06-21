import { Component, Input, OnInit } from '@angular/core';

import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  counter: number;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
    this.counter = this.counterService.activeToInactiveCounter;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
