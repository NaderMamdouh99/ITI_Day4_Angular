import { Component, Input } from '@angular/core';
import { IStudent } from 'src/app/InterFaces/istudent';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  @Input()
StudentDetails:IStudent={
  name: "Default",
  age: 0,
  address:"Default",
  school:"Default"
}
}
