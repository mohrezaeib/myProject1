import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-deatil',
  templateUrl: './product-deatil.component.html',
  styleUrls: ['./product-deatil.component.css']
})
export class ProductDeatilComponent implements OnInit {
  product: Product = {productID : 1, productDetail : 'product detail ', productName: 'Name ' , productImage: 'assets/images/pro.png'};
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit(): void {
  }

}
