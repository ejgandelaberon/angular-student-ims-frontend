import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.scss']
})
export class UserAccountsComponent implements OnInit {
  button = {
    add: {text: 'Add User', btnClass: '', color: 'primary'},
    edit: {text: 'Edit', btnClass: '', color: 'accent'},
    delete: {text: 'Delete', btnClass: '', color: 'warn'},
  }

  constructor() { }

  ngOnInit(): void {
  }

}


