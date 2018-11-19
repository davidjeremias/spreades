import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit {

  @Input() label: string;
 

  constructor() { }

  ngOnInit() {
    console.log(this.label);
  }

}
