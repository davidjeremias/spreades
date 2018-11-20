import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputGroupComponent } from './input-group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InputGroupComponent
  ],
  exports: [
    InputGroupComponent
  ]
})
export class InputGroupModule { }
