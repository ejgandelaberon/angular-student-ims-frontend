import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  button = {
    add: {text: 'Add User', btnClass: '', color: 'primary'},
    edit: {text: 'Edit', btnClass: '', color: 'accent'},
    delete: {text: 'Delete', btnClass: '', color: 'warn'},
  }

  constructor() { }

  ngOnInit(): void {
  }

}
