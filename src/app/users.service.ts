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
      new user("afif","1234","afifdaw1@hotmail.com","Planet Earth","https://occ-0-2621-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWBoerl-TmDTocItKd04Wdi_YQWzM5rIFhGZhBPXxXKOqKvzTLq2s-CGMoC-W-jgVElZ0OLSD0U1AQbENsnXXEcn2Z4K.png?r=84f%27"),
      new user( "Soraya","sos123","jaboalhija@gmail.com","USA CALI",'https://play-lh.googleusercontent.com/rCYSms-DkQHY3b6Oak-ZuPgRkhM5WOTq8w83d5xcdLF7oNqFIfxeUY2-kRLy5Tdp0WI5=rw'),
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
