import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { ReactjsComponent } from './reactjs/reactjs.component';
import { VuejsComponent } from './vuejs/vuejs.component';
import { JsComponent } from './js/js.component';
import { MatModule } from './mat/mat.module';
import { CheckBoxComponent } from './check-box/check-box.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    ReactjsComponent,
    VuejsComponent,
    JsComponent,
    CheckBoxComponent,

    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
