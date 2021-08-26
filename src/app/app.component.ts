import { Component, ElementRef, ViewChild } from '@angular/core';
import {of} from 'rxjs';
import {BehaviorSubject, Subscription} from 'rxjs';
import { filter, map,delay } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  id:number = 3;

  title = 'angular2021';
  myStatus = 'my status';

  sw = true;

  color:string;

  people = [
    { name: 'felipe', lastName: 'felipao' },
    { name: 'achito', lastName: 'del ozo' },
    { name: 'maximus', lastName: 'salazn' },
    { name: 'sebita', lastName: 'blacky' }
  ];

  tictock = of([1,2,3,4,5]);
  personaAsub:Subscription;
  video = 1;
  ticktock2 = new BehaviorSubject(this.video);

  @ViewChild ('myDiv1' ) myDiv1: ElementRef;

  @ViewChild ('myDiv2' ) myDiv2: ElementRef;
  
  @ViewChild ('myCompFabo' ) myCompFabo: any;

  data = [1,2,3,4,5,6,7,8,9];
  
  constructor(private router: Router) {
    this.pure(2,3);
    this.pure(10,2);
    this.pure(5,5);


    this.impure(2,3);
    this.impure(10,2);
    this.impure(5,5);

    //ejemplo de tictoc que vemos con of, subscribe se ejcuta el observable
    //cada persona que se suscribe recibe videos

    //persona A
    this.tictock.pipe(
      map(s => s.join('-')),
      map(s => s + 'hola'),
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
   
    //persona B
    this.tictock.pipe(
      filter((v:any) => v[0]%2 === 1)
    ).subscribe(v => {
      console.log('PERSON B VIDEO', v);
    });
     //persona C
     this.tictock.subscribe(v => {
      console.log('PERSONA C VIDEO', v)
    });

    //ahora con los ejemplos de observer para tictoc y con behavior
    // PERSON A
    this.personaAsub = this.ticktock2.pipe(
      filter(s => s%2 === 0)
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });
    // PERSON B
    this.tictock.pipe(
      delay(4000)
    ).subscribe(v => {
      console.log('PERSON B VIDEO', v);
    });
    // PERSON C
    this.tictock.subscribe(v => {
      console.log('PERSON C VIDEO', v);
    });
    



    const testMap = [1, 2, 3, 4, 5, 6].map(item => item * 2);
    console.log(testMap);

    const testForeeach = [1, 2, 3, 4, 5, 6].forEach(item => item);
    console.log(testMap);

    const testFind = [1, 2, 3, 4, 5, 6].find(item => item === 4); //tres iguales para igualar de manera estricta, compara todo, si no dos iguales basta
    console.log(testFind);

    const testFilter = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 0);
    console.log(testFilter); //para ver si numero es par o no
    //sirve para edades

    const testFindIndex = [1, 2, 3, 4, 5, 6].findIndex(item => item % 2 === 90);
    console.log(testFindIndex);
    //nos devuelve toda la posicion y busca en todo el array

    const testIndexOf = [90, 2, 300, 4, 5, 6].indexOf(300);
    console.log(testIndexOf);
    //trabaja tambvien con cadenas y la posicion

    // const testIndexOf = 'ricardo'.indexOf('o')
    // console.log(testIndexOf);

    const testJoin = [1, 2, 3, 4, 5, 6].join(',');
    console.log(testJoin);

    const testSplit = '1,2,3,4,5,6'.split(',');
    console.log(testSplit);

    const testSpliceA = [10, 20, 30, 40, 50, 60];
    const testSpliceB = [1, 2, 3, 4, 5, 6].splice(1, 2);
    testSpliceA.splice(0, 1);
    console.log(testSpliceB, testSpliceA);

    //operador reduce

    //sirve para sumar, apartir de array
    //recorre cada una de las posicioned
    //value = valor actual
    //acc = aculador de la suma anterior, tambvien puede multiplicar
    //podemos pasar valor inicial del acumulador
    //se puede poner un parametro como el valor inicial como el tercer parametro
    const testReduce = [1, 2, 3, 4, 5, 6].reduce(
      (acc, value) => acc + value,
      100
    );
    console.log(testReduce);
  

   //para convertir json a array
  const testEntries = {value: 'ricardo', key:'RPC'};
  console.log('aaaaa', Object.entries(testEntries));



  //para el segindo key
  const testKey = {value: 'ricardo', key:'RPC'};
  console.log('bbbb', Object.keys(testEntries));
    
  //tambien se puede hacer lo mismo para mostrar todos los valores
  //OJO PREGUNTA EXAMEN
  //TENEMOS
  // const asasdad = [1:'d',2; 'd',3;'b',4,5,6,7,8,9,4];
  //dado esto convertir a array, es un json
//solo quiero los atruvutos
//obj.keys
//quiero los nombre
//obj.values en un array


//variable let 
//solo se ejecuta en el contexto definido, solo dentro del constructor
//por ejemplo se la puede usar en un for
//y se la puede usar en multiples for, por que es una constante en el contextp

let testLet

const array1 = [1,2,3,4,5];
const array2 = [9,10,11, ... array1]
//el spread operator hace esto 
//tambien reemplaza valorrs
//tamboen sirve para concatenar

const per1 = {name : 'a', age :12};
const per2 = {data: 'R', ...per1};

//en redux siempre se usa el spread operator
console.log('Spread', array2, per2)



//destructuracion
//destrucutra constantes de un JSON, saca partes del json que necesito usar, se convierte en una variable

const per3 = {
  name: 'a', 
age: 12, 
phone: 12323234234, 
extra: 123, 
response:200,
response2:200,
response4:200
};

const {phone:ci} = per3;
console.log('name=', ci); 


//{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los numeros pares

//[1,2,3,4,5,6] filtrar los numeros impares y mostrarlos como cadena

//ejercicio 1 

const a = {1:'a', 2:'a', 3:'a',4:'a',5:'a',6:'a'};
const b = Object.keys(a).map(n => parseInt(n)).reduce ((acc, value) => {
  if(value %2 !== 1){
    acc = acc + value;

  }
  return acc;
}, 0);
console.log('aaa', b)


//ejercicio 2

console.log ('222= ' , [1,2,3,4,5,6].filter (s => s%2 !==0).join (','))


}

printDataFabianseguComp(event:any){
  console.log('FABIANSEGU COMP:', event);
}

printData(event){
  console.log('CHILD COMP SEND DATA: ', event);
}


onAddVideo(){
  this.video ++
  this.ticktock2.next(this.video); 
}
person1Unsubscribe(){
  this.personaAsub.unsubscribe();
  console.log('PERSON A SE DESUSCRIBE')
}
test (event){
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,', event);
}



test100(event){
  console.log('234234234234234', event);
}
onShowLocalVars(){
  console.log(this.myDiv1, this.myDiv2, this.myCompFabo);
    //accedmos directamente al valor del child

  this.myCompFabo.onClickTest();
  this.myDiv1.nativeElement.style.backgroundColor ='green';
  console.log(this.myDiv1, this.myDiv2, this.myCompFabo);
  this.myDiv2.nativeElement.value = 'fabito';
}

pure(a:number, b:number){
  console.log(a + b)
  return a + b;
}

impure(a:number, b:number){
  const aux = Math.random();
  console.log( a + b + aux)
  return a + b + aux;
}
onGoView2FromTS():void{
  this.router.navigate(
    ['view2', this.id, 'sub', 33333],
    {queryParams: {name: 'oskar', lastName: 'sanlzmann'}}
  )
}
}