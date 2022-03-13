import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interfaces/table-column';
import { Users } from 'src/app/interfaces/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users: Users[] = [];

  usersTableColumns!: TableColumn[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.initColumns();
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe((res)=>{
      this.users = res;
    })
  }

  initColumns(): void {
    this.usersTableColumns = [
      {
        name: 'First Name',
        dataKey: 'firstName'
      },
      {
        name: 'Last Name',
        dataKey: 'lastName'
      },
      {
        name: 'Username',
        dataKey: 'username'
      }
    ];
  }

}
