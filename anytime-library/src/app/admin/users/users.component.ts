import { Component, OnInit } from '@angular/core';

import { User } from './../../shared/user.model';
import { DataService } from './../../shared/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private dataService: DataService) {
    this.dataService.fetchUsers()
      .subscribe((fetchedUsers: User[]) => this.users = fetchedUsers);
  }

  ngOnInit() {
  }

}
