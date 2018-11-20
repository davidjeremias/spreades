import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit {

  @Input() label: string;
 
  @ViewChild('nome') nome: HTMLElement;

  constructor() { }

  ngOnInit() {
    console.log(this.nome);
  }

}
