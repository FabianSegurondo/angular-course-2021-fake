import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lugar1Component } from './lugar1/lugar1.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Lugar1Component
  ],
  exports: [
    Lugar1Component
  ]
})
export class LugarModule { }