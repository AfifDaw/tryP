import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  developers : any =[
    {Name: "Afif Daw", ID: 314879370, Country: "ISRAEL", Email: "Afifdaw1@hotmail.com", Img:"https://occ-0-2621-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWBoerl-TmDTocItKd04Wdi_YQWzM5rIFhGZhBPXxXKOqKvzTLq2s-CGMoC-W-jgVElZ0OLSD0U1AQbENsnXXEcn2Z4K.png?r=84f"},
    {Name: "Soraya Abulhija", ID: 322629874, Country: "USA CALI", Email: "jaboalhija@gmail.com", Img: "https://play-lh.googleusercontent.com/rCYSms-DkQHY3b6Oak-ZuPgRkhM5WOTq8w83d5xcdLF7oNqFIfxeUY2-kRLy5Tdp0WI5=rw"}
  ];

}
