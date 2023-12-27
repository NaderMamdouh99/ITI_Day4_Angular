import { Component, OnInit } from '@angular/core';
import { ProductValue } from 'src/app/InterFaces/product-value';

@Component({
  selector: 'app-parent-lab',
  templateUrl: './parent-lab.component.html',
  styleUrls: ['./parent-lab.component.css']
})
export class ParentLabComponent {

  ProductName:string='';
  ProductPrice:number=0;

  ParentData:ProductValue={
    product: '',
    price: 0,
  }




  GetDataFromChild1(data:any){
    this.ParentData=data;
    console.log(this.ParentData);

  }

}
