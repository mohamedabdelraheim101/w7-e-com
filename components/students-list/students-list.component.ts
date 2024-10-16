import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from 'src/app/interfaces/student';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {
  studentForm: FormGroup;
  studentsData= this._StudentService.studentsData;
  students: Student[];
  constructor(
    private _StudentService: StudentService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: [''],
      age: [''],
      email: [''],
    });

    this.students = this.studentsData;
  }

onSubmit(): void {
  const newStudent: Student = this.studentForm.value;
  this.addStudent(newStudent); 
  console.log(this.studentForm.value);
}


  addStudent(student: Student) {
    this._StudentService.add(student);
  }
}
