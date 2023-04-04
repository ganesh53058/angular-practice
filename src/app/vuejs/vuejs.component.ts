import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-vuejs',
  templateUrl: './vuejs.component.html',
  styleUrls: ['./vuejs.component.css']
})
export class VuejsComponent implements OnInit {

  constructor() { }

  title: string = "VueJS";

  onEnroll(){
    let enroll = new EnrollService()
    enroll.onEnrollClicked(this.title);
  }

  ngOnInit(): void {
  }

}
