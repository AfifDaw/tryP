import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userServ: UsersService) { }

  ngOnInit(): void {
    this.validUser = this.userServ.validUser;
  }

  validUser:any;

}
