import {Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

//esta es una directiva estructural
//una directiva solo puede tener un inout de entrada yy debe tener el mismo nombre que el directiva estructural
//solo acepta un input
//las estructural solo aceptan igual un output 
//deberian cambiar en tiempo real
@Directive ({
  selector: '[ngIfFabian]'
})
export class Directive2Directive  {

  @Input () showView:boolean =  true;

  constructor (private templateRef: TemplateRef <any>,
    private viewContainerRef: ViewContainerRef){

      if(this.showView){
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      }else{
        this.viewContainerRef.clear();
      }
     

    }

}
