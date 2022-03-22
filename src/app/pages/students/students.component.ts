import { StudentFormComponent } from './../../components/forms/student-form/student-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(StudentFormComponent, {
      width: '30%'
    })
  }

}