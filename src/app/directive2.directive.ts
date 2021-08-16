import {Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

//esta es una directiva estructural
//una directiva solo puede tener un inout de entrada yy debe tener el mismo nombre que el directiva estructural
//solo acepta un input
//las estructural solo aceptan igual un output 
//deberian cambiar en tiempo real
@Directive ({
  selector: '[ngIfFabian]'
})
export class Directive2Directive implements OnChanges {

  @Input() ngIfRicardo:boolean = true;

  @Output() test = new EventEmitter<any>(null);

  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { 

  }

  ngOnChanges(changes:any){
    console.log('changes: ', changes.ngIfRicardo.currentValue)
    this.setViewContainer(changes.ngIfRicardo.currentValue);
    
  }

  setViewContainer(show:boolean){
    if(show){
      this.test.emit('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    } 
  }


}
