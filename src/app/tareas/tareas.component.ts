import { Component, OnInit } from '@angular/core';
import {Tarea} from '../modelos/tarea';
import { TareasServiceService } from '../services/tareasService';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  backClass:string="";
  tareas:Tarea[];

  constructor(private _tareasService:TareasServiceService) { }

  ngOnInit() {
    this.tareas=this._tareasService.getTarea();
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
