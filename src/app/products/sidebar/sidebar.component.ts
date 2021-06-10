import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categoryArr=["Treadmill","Kettlebell","legs machine","Dumbbell","Bands","Chest machine"];

  selectedCategory:String = ''

  showProductListComponent:boolean = false;

  dispTreadmill(){
    this.selectedCategory = this.categoryArr[0];
    this.showProductListComponent = true;
  }

  dispKettlebell(){
    this.selectedCategory = this.categoryArr[1];
    this.showProductListComponent = true;
  }

  dispLegsMachine(){
    this.selectedCategory = this.categoryArr[2];
    this.showProductListComponent = true;
  }

  dispDumbbell(){
    this.selectedCategory = this.categoryArr[3];
    this.showProductListComponent = true;
  }

  dispBands(){
    this.selectedCategory = this.categoryArr[4];
    this.showProductListComponent = true;
  }

  dispChestMachine(){
    this.selectedCategory = this.categoryArr[5];
    this.showProductListComponent = true;
  }

}
