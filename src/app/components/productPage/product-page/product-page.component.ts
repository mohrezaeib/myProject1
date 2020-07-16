import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:'assets/images/pro.png'},
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:"assets/images/pro.png"},
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:"assets/images/pro.png"},
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:"assets/images/pro.png"},
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:"assets/images/pro.png"},
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:"assets/images/pro.png"},
      {productID : 1, productDetail :"product detail ",productName:"Name " , productImage:"assets/images/pro.png"}

    ];


  }



}
