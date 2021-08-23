import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trans',
  template:`
<div> [style.background]= "mineType === "PoW" ? 'yellow' : 'green'"
style="float: left; margin: 15px; padding: 15px;">
<p>Date: {{date}}</p>
<p>from: {{from}}</p>
<p>to: {{to}}</p>
<p>quantity: {{quantity}}</p>
<p>moneyType: {{moneyType}}</p>
<p>mineType: {{mineType}}</p>
<p>miner:{{miner}}</p> 
 </div>

  `,
})
export class TransaccionesComponent implements OnInit {

  @Input() date:string;
  @Input() from:string;
  @Input() to:string;
  @Input() quantity:number;
  @Input() moneyType:string;
  @Input() mineType:string;
  @Input() miner:number;
  constructor() { }

  ngOnInit() {
  }

}