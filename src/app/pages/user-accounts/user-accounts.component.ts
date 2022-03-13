import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.scss']
})
export class UserAccountsComponent implements OnInit {
  button = {
    add: {text: 'Add User', btnClass: 'btn btn-success'},
    edit: {text: 'Edit', btnClass: 'btn btn-primary'},
    delete: {text: 'Delete', btnClass: 'btn btn-danger'},
  }

  constructor() { }

  ngOnInit(): void {
  }

  filterData(event: Event) {
    // this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }


}


