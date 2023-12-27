import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductValue } from 'src/app/InterFaces/product-value';


@Component({
  selector: 'app-child2-lab',
  templateUrl: './child2-lab.component.html',
  styleUrls: ['./child2-lab.component.css']
})
export class Child2LabComponent implements OnChanges {


  @Input()
  getChildData:ProductValue={
    product: '',
    price: 0,
  };

  ArrayData:ProductValue[]=[];
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (this.getChildData.price != 0
      && this.getChildData.price >= 1000
      && this.getChildData.price <= 9000
      && this.getChildData.product.length > 5) {
      this.ArrayData.push(changes['getChildData'].currentValue);
    }
  }

  Delete(product:ProductValue){
    let index = this.ArrayData.indexOf(product);
    this.ArrayData.splice(index,1);
}
}
