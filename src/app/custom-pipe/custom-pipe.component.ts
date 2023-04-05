import { Component, OnInit } from '@angular/core';


export interface Person {
  name: string;
  age: number;
  country: string;
}
@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {
  people: Person[] = [];
  searchTerm: any;
  names = ["Ganesh", "Yuvaraj", "Kranthi", "Sagar", "Rajesh"];

  constructor() {
    this.names.forEach((e, i) => this.people.push({
      name: e,
      age: i + 24,
      country: 'AndhraPradesh'
    }));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
