
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LugarModule } from 'src/app/lugar/lugar.module';
import { Votacion1Component } from './votacion1/votacion1.component';
import { Votacion2Component } from './votacion2/votacion2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LugarModule
  ],
  declarations: [
    Votacion1Component, Votacion2Component
  ]
  , exports:[
    Votacion1Component, Votacion2Component
  ]
})
export class VotacionModule { }