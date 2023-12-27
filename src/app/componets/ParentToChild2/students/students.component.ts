import { Component } from '@angular/core';
import { IStudent } from 'src/app/InterFaces/istudent';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
Student:IStudent [] = [
  {name: "Nader",age: 24,address:"Cairo",school:"Boys"},
  {name: "Ali",age: 17,address:"Bns",school:"Boys"},
  {name: "Mona",age: 20,address:"Minya",school:"Girls"},
  {name: "Hossam",age: 27,address:"Alex",school:"Boys"},
]
}
