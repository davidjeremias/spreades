import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  lbl: string = "Email:";

  ngOnInit(){
    console.log(this.lbl);
  }
}
