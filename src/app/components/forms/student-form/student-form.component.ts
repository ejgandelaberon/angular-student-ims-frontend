import { Students } from './../../../interfaces/students';
import { StudentService } from 'src/app/services/student.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @Input() title!: string;
  @Output() addData = new EventEmitter();
  addForm!: FormGroup;

  //Form state
  loading: boolean = false;
  success: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private studentService:StudentService,
    private dialogRef: MatDialogRef<StudentFormComponent>,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required]),
      yearLevel: new FormControl('', [Validators.required])
    })
  }

  onSave() {
    if (this.addForm.valid) {
      const formValue: Students = this.addForm.value;
      this.studentService.postStudents(formValue).subscribe({
        next:()=>{
          this.addForm.reset();
          this.dialogRef.close();
          this._snackBar.open('Student has been added!', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        },
        error:()=>{
          this._snackBar.open('An error occured while submitting the data!', 'Close', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
        }
      });
    } else {
      this._snackBar.open('Please fill all the requireed fields!', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
    
  }

  async submitHandler() {
    this.loading = true;
    const formValue = this.addForm.value;
  }

}
