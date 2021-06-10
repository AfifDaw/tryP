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
    {Name: "Afif Daw", ID: 0, Country: "Planet Earth", Email: "Afifdaw", Img:"https://occ-0-2621-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWBoerl-TmDTocItKd04Wdi_YQWzM5rIFhGZhBPXxXKOqKvzTLq2s-CGMoC-W-jgVElZ0OLSD0U1AQbENsnXXEcn2Z4K.png?r=84f"},
  ];

}
