import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PurePipeComponent } from './pure-pipe/pure-pipe.component';
import { ImpurePipeComponent } from './impure-pipe/impure-pipe.component';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { FilterPipe } from './filter.pipe';
import { StudentData } from './students.service';


@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    CustomPipeComponent,
    PurePipeComponent,
    ImpurePipeComponent,
    FilterPipeComponent,
    AsyncPipeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentData],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private students: StudentData){}
 }
