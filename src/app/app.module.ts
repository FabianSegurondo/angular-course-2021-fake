import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BilleterasComponent } from './billeteras/billeteras.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,BilleterasComponent, TransaccionesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
