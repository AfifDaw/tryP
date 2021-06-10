import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productServ:ProductsService) { }

  ngOnInit(): void {
    this.productsArray = this.productServ.getProducts();
    this.productServ.setProdClassArr(this.productsArray);
 
  }

  productsArray: product[] = [];

  @ViewChild(SidebarComponent) prodSD?: SidebarComponent;

}

export class product{
  SerialNumber:String;
  Name:String;
  Price:number;
  Category:String;
  Description:String;
  ImgUrl:String;
  Quantity:number;


  constructor(  

    SerialNumber:String,
    Name:String,
    Price:number,
    Category:String,
    Description:String,
    ImgUrl:String,
    Quantity:number,
    
    )

    {

      this.SerialNumber = SerialNumber;
      this.Name = Name;
      this.Price = Price;
      this.Category = Category;
      this.Description = Description;
      this.ImgUrl = ImgUrl;
      this.Quantity = Quantity;

    }
}
