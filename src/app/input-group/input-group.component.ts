import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit {

  @Input() label: string;

  inp: string = '';

  req: string = "Campo Obrigatório"

  validacao(): boolean{
    if(this.inp.length <= 0){
      return true;
    }
    return false;
  }
 
  constructor() { }

  ngOnInit() {
    
  }

}
