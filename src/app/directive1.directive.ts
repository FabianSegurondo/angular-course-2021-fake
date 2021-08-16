import {Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output} from '@angular/core';

@Directive ({
  selector: '[directive1Test]'
})
export class Directive1Directive implements OnChanges {

  //elemnento de referencia
  //de esta manera nos ahorramos declarar cada elementos
  //elementref hace referencia aun html, se lo inyecta, el width, height, etc
  //directiva de atributo no tiene asteriscos por adelant

  //si input y output tienen el mimso nombre que directiva se puede cortar code
  @Input ()directive1Test:string = 'yellow';


  @Output () outputTest = new EventEmitter <any> (null);

  //para cambiar de manera efectiva tenemos que aplicar el ngOnChanges
  //usamos tambien el host listener, a nivel dom recibe cualquier cambio, escucha todos los cambios en esa directiva y tiene que ser dentro de esa directiva
color:string;
  @HostListener ('click') onClick(){
    this.setBackgroundColor(this.directive1Test);
  }

  @HostListener ('mouseleave') onMauseleave(){
    this.setBackgroundColor(this.color);
    this.outputTest.emit('test myoutput');

  }
  @HostListener ('mouseenter') onMauseenter(){
    this.setBackgroundColor('gray');
    this.element.nativeElement.style.backgroundColor = 'gray';
  }
constructor(private element: ElementRef ){
  this.setBackgroundColor(this.directive1Test);
  this.element.nativeElement.style.border = '5px green solid';
}

//reutilizamos funcion con el element
setBackgroundColor(color:string){
  this.color = color;
  this.element.nativeElement.style.backgroundColor = this.color;
}

ngOnChanges (changes:any){
  this.setBackgroundColor(changes.directive1Test.currentValue)
}
}