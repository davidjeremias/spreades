
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { InputGroupModule } from './input-group/input-group.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputGroupModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
