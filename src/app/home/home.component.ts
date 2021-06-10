import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private prodServ: ProductsService) { }

  ngOnInit(): void {
    this.productsOnSale = this.prodServ.getProductsOnSale();
    this.newProducts = this.prodServ.getNewProducts();

  }

  productsOnSale = [];

  newProducts = [];

  sendToCart(item){
    this.prodServ.setCartItemsArr(item);
    alert("Item Added To Cart.")
  }

}
