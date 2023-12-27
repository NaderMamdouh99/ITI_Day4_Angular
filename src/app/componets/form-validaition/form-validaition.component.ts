import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validaition',
  templateUrl: './form-validaition.component.html',
  styleUrls: ['./form-validaition.component.css']
})
export class FormValidaitionComponent {
stdName:string= '';
stdAge:number= 0 ;




public get isValidName(){
  return this.stdName != '' && this.stdName.length >= 3
}

public get isValidAge(){
  return this.stdAge > 18 && this.stdAge < 35
}

Data={
  Name : "Default",
  Age : 0
}

objectData:object ={
  Name : this.stdName,
  Age : this.stdAge
}
Arraydata:Array<object>= [
];
Add(){
this.Data.Name = this.stdName;
this.Data.Age = this.stdAge;
this.Arraydata.push(this.Data)
console.log(this.Data);
console.log(this.Arraydata);


}

}
