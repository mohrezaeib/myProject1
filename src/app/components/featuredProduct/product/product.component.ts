import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    /*this.dataService.getProduct().subscribe(
      (result: Product) => {
        console.log(result.productName);
      }
    );*/
    this.products = [
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:'assets/images/pro.png'},
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:"assets/images/pro.png"},
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:"assets/images/pro.png"}
    ];
  }

}
