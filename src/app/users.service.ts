import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  validUser = []

  setValidUser(user){
    this.validUser = user;

  }

  getUsers(){
    return[
      new user("admin","admin","admin@admin.com","somewhere","https://www.zamosc.bydgoszcz.pl/images/ZDJECIA/OGOLNE/admin.png"),
      new user("Peanut","Peanut","Peanut","USA","https://pbs.twimg.com/media/DerIel0UwAYgPdQ.jpg"),
    ];
  }

  constructor() { }
}

export class user{
  Username:String;
  Password:String;
  Email:String;
  Address:String;
  ProfPic:String;

  constructor(  
    Username:String,
    Password:String,
    Email:String,
    Address:String,
    ProfPic:String){
    this.Username = Username;
    this.Password = Password;
    this.Email = Email;
    this.Address = Address;
    this.ProfPic = ProfPic;
    }
}
