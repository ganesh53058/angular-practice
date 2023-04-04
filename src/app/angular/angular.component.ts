import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  constructor() { }

  title: string = "Angular"

  ngOnInit(): void {
  }

  onEnroll(){
    let enroll = new EnrollService()
    enroll.onEnrollClicked(this.title);
  }

}
