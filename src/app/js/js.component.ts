import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "JavaScript"

  
  onEnroll(){
    let enroll = new EnrollService()
    enroll.onEnrollClicked(this.title);
  }

}
