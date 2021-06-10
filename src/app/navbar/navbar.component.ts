import { Component, OnInit, } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private users: UsersService, private prodSer:ProductsService) { }

  ngOnInit(): void {
    this.validUser = this.users.validUser;
    this.cartCount = this.prodSer.getCartCounter();
  }

  validUser = []

 cartCount :number = 0

}
