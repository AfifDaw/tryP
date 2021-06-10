import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private prodSer: ProductsService) { }

  ngOnInit(): void {
    this.cartList = this.prodSer.getCartItemsArr();
    this.cartCount = this.prodSer.getCartCounter();
    this.totalPayment = this.calcPrice();
  }

  cartCount:number;

  cartList = [];

  totalPayment : number = 0;

  calcPrice(){
    for(let i = 0 ; i < this.cartList.length; i+=1){
      this.totalPayment += this.cartList[i].Price;
    }
    return this.totalPayment;
  }

  decPricePayment(prod){
    this.totalPayment -= prod.Price;
  }

  removeItem = (prod) => {
    for(let item of this.cartList){
      if(item == prod){
        this.cartList.splice(prod, 1);
        this.prodSer.removeCartItem(prod);
        this.prodSer.decCounter();
        this.cartCount -= 1;
        this.decPricePayment(prod);
      }
    }
    alert("Item Got Removed From Cart.");
  }

  checkOutBtn(){
    let width = 500;
    let height = 600;
    let left = screen.availWidth/3;
    let top = screen.availHeight/4;
    let windowsFeatures = "width="+width+",height="+height+",left="+left+",top="+top;
    window.open("https://www.paypal.com/us/signin","_blank", windowsFeatures);
  }

}
