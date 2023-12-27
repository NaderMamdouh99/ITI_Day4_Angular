import { Component, EventEmitter, Output } from '@angular/core';
import { ProductValue } from 'src/app/InterFaces/product-value';

@Component({
  selector: 'app-child1-lab',
  templateUrl: './child1-lab.component.html',
  styleUrls: ['./child1-lab.component.css']
})
export class Child1LabComponent {

Product:string= '';
Price:number= 0 ;




public get isValidName(){
  return this.Product != '' && this.Product.length > 5
}

public get isValidAge(){
  return this.Price >= 1000 && this.Price <= 9000
}

ProductValue(P:any){
  this.Product=P.target.value;
}

ProductPrice(p:any){
  this.Price=p.target.value
}

Child1Data:ProductValue={
  product: '',
  price: 0,
}
@Output()
Child1DataEvent:EventEmitter<object>=new EventEmitter<object>();


SendData(){
  this.Child1Data={
    product : this.Product,
    price : this.Price,
  }
  this.Child1DataEvent.emit(this.Child1Data)
  this.Product = '';
  this.Price = 0 ;
}

}

