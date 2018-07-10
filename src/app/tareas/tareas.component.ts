import { Component, OnInit } from '@angular/core';
import {Tarea} from '../modelos/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  backClass:string="";
  tareas:Tarea[];

  constructor() { }

  ngOnInit() {
    this.tareas=[
      new Tarea(1,"Planificar",1.2,1),
      new Tarea(2,"Analiza",6,2),
      new Tarea(3,"Testar",2,1)
    ];
  }

  unaPropiedad:number=190;

  evaluarPar(id:number){
    return id%2==0;
  }

  changeBack(){
    console.log("pasando");
    this.backClass="blue";
  }

}
