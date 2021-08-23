import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'billeteras',
  template: `
  <div [style.background]=" eth+btc > 10 ? 'brown' : 'gray'"
       style="float: left; margin: 10px; padding: 10px;">
	  <p>Wallet: {{wallet}}</p>
    <p>Nombre: {{name}}</p>
	  <p>Eth: {{eth}}</p>
	  <p>Btc:{{btc}}</p>
  </div>
  `,
})
export class BilleterasComponent implements OnInit {

  @Input() wallet:string;
  @Input() name:string;
  @Input() eth:number;
  @Input() btc:number;

  constructor() { }

  ngOnInit() {
  }

}