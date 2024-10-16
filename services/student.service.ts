import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  studentsData: Student[] =  [
    {
      name:'mohamed',
      age: 10,
      email: 'mm@gmail.com'
    },
    {
      name:'ahmed',
      age: 20,
      email: 'asdasda@gmail.com'
    }
  ]

  add(newStudent: Student) {
      this.studentsData.push(newStudent)
  }

}