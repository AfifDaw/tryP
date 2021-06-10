import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private usersService: UsersService, private Router: Router) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }

  users = [];

  onSubmit(loginForm){
    for(let user of this.users){
      if(user.Email == loginForm.email.value && user.Password == loginForm.password.value){
        alert("Valid user !");
        this.Router.navigateByUrl('/home');
        this.usersService.setValidUser(user);
        return;
      }
    }
    alert("Invalid User/Password !")
  }


}
