import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {

  getChildData:string = '';

  GetData(d:any){
    this.getChildData=d;
  }
}
