import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  @Input() name: string;
  @Input() lastName: string;
  @Output() onSendData = new EventEmitter(null);

  constructor() {}
ngOnInit(): void {
throw new Error('Method not implemented.');
}
myvar1 = 4;
myvar2 = 5;

  onShowData(){
    this.onSendData.emit('general data ' + this.name + ' ' + this.lastName);
  }
  test0(event){
    console.log('event click:', event);
    console.log('SUMA: ', this.myvar1 + this.myvar2);
  }

  test1(event){
    console.log('event blur:', event);
  }

  test3(event){
    console.log('event double click:', event);
  }

}