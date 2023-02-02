import { Component, OnInit } from '@angular/core';
import { StudentData } from '../students.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {

  constructor(private studentData: StudentData) { }
  
  students: {name: string, age: number, dob: object, marks: number, income: number, weight: number}[] = [];

  ngOnInit(): void {
    this.students = this.studentData.studentDetails;
   }

}
