import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-reactjs',
  templateUrl: './reactjs.component.html',
  styleUrls: ['./reactjs.component.css']
})
export class ReactjsComponent implements OnInit {

  constructor() { }

  title: string = "ReactJS"

  
  onEnroll(){
    let enroll = new EnrollService()
    enroll.onEnrollClicked(this.title);
  }

  ngOnInit(): void {
  }

}
