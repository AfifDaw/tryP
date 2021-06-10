import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productServ: ProductsService) { }

  ngOnInit(): void {
    this.productList = this.productServ.returnProdClassArr();
  }

  @Input() selectedCategory;

  productList = [];

  cartArr = [];

  addToCart(cartItems){
    this.cartArr = cartItems;
    console.log(this.cartArr)
    this.productServ.setCartItemsArr(this.cartArr);
    alert("Your item got added to the cart.")
  }

}
