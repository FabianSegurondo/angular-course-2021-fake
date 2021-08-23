import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent{
  @Input() wallet: string;
  @Input() name: string;
  @Input() eth: number;
  @Input() btc: number;
  

  constructor() {}
  colorWallet(){
    if(this.eth + this.btc > 10){
      return true;
    }
    else return false;
  }


}