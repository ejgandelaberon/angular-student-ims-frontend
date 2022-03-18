import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/interfaces/table-column';
import { Students } from 'src/app/interfaces/students';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  students: Students[] = [];

  studentsTableColumns!: TableColumn[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
    this.initColumns();
  }

  getStudents() {
    this.studentService.getStudents()
    .subscribe((res)=>{
      this.students = res;
    })
  }

  initColumns(): void {
    this.studentsTableColumns = [
      {
        name: 'First Name',
        dataKey: 'firstName'
      },
      {
        name: 'Last Name',
        dataKey: 'lastName'
      },
      {
        name: 'Course',
        dataKey: 'course'
      },
      {
        name: 'Year Level',
        dataKey: 'yearLevel'
      }
    ];
  }

}
