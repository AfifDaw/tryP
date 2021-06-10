import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private userServ:UsersService) { }

  ngOnInit(): void {
    this.validUser = this.userServ.validUser;
  }
  validUser:any;


}
