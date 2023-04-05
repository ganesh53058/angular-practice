import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { FilterPipe } from './filter.pipe';
import { StudentData } from './students.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    CustomPipeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentData],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private students: StudentData){}
 }
