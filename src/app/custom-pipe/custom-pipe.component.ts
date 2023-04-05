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
  names = ['Maverick', 'Stanislav', 'Arxero', 'Feruchio', 'Mavericus', 'Arxiour'];

  constructor() {
    this.names.forEach((e, i) => this.people.push({
      name: e,
      age: i + 20,
      country: 'Bulgaria'
    }));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
