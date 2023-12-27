import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {


  ChildData:string = "Child Data To Parent";
  @Output()
  MyEvent:EventEmitter<string>=new EventEmitter<string>();


  SendData(){

    this.MyEvent.emit(this.ChildData);

  }

  ngOnInit(): void {
/*     console.log("send Data");

    this.MyEvent.emit(this.ChildData); */
  }
}
