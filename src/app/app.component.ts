import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, of, Subscription } from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';

  newDate = new Date('2019-09-07T15:50+00Z');
  totalETH = 19;
  totalBTC = 21;
  sw = true;


  wallets = [
    { wallet: 'MARIA123', name: 'maria', eth: 0, btc: 2 },
    { wallet: 'JUAN123', name: 'juan', eth: 5, btc: 0 },
    { wallet: 'LUCAS123', name: 'lucas', eth: 6, btc: 3 },
    { wallet: 'MARCOS123', name: 'marcos', eth: 0, btc: 2 },
    { wallet: 'PEDRO123', name: 'pedro', eth: 1, btc: 0 },
    { wallet: 'JUANA123', name: 'juana', eth: 10, btc: 12 }
  ];
  transactions = [
    {
      date: '2019-09-07T15:50+00Z',
      from: 'MARIA123',
      to: 'JUANA123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 5,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'JUAN123',
      to: 'PEDRO123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 21,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'LUCAS123',
      to: 'MARCOS123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 5,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'MARCOS123',
      to: 'LUCAS123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 10,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'PEDRO123',
      to: 'JUAN123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 5,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'JUANA123',
      to: 'MARIA123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 30,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'MARIA123',
      to: 'JUANA123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 2,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'JUAN123',
      to: 'PEDRO123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 15,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'LUCAS123',
      to: 'MARCOS123',
      quantity: 2,
      moneyType: 'btc',
      mineType: 'PoW',
      miner: 3,
      mined: false
    },
    {
      date: '2019-09-07T15:50+00Z',
      from: 'MARCOS123',
      to: 'LUCAS123',
      quantity: 2,
      moneyType: 'eth',
      mineType: 'PoS',
      miner: 5,
      mined: false
    }
  ];



  constructor() {}
  Minar(mined, miner, mineType) {
    if (mineType === 'PoS' && miner <= 20) {
      return false;
    } else return !mined;
  }
  setTotalETH() {
    this.totalETH = 0
    for (let i = 0; i < this.wallets.length; i++) {
      this.totalETH+= this.wallets[i].eth;
    }
    return this.totalETH;
  }
  setTotalBTC() {
    this.totalBTC = 0
    for (let i = 0; i < this.wallets.length; i++) {
      this.totalBTC+= this.wallets[i].btc;
    }
    return this.totalBTC;
  }
  allTransactionDone(){
    for (let i = 0; i < this.transactions.length; i++){
      if(this.Minar(this.transactions[i].mined, this.transactions[i].miner, this.transactions[i].mineType)){
        return false;
      }
    }
    return true;
  }
  onTransaction(i: number) {
    this.transactions[i].mined = true;
    for (let i2 = 0; i2 < this.wallets.length; i2++) {
      if (this.wallets[i2].wallet === this.transactions[i].from) {
        if (this.transactions[i].moneyType === 'eth') {
          this.wallets[i2].eth -= this.transactions[i].quantity;
        } else this.wallets[i2].btc += this.transactions[i].quantity;
      }
      if (this.wallets[i2].wallet === this.transactions[i].to) {
        if (this.transactions[i].moneyType === 'eth') {
          this.wallets[i2].eth += this.transactions[i].quantity;
        } else this.wallets[i2].btc += this.transactions[i].quantity;
      }
    }
    
  }
  convertToDate() {}
 
}
