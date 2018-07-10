import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea';

@Injectable()
export class TareasServiceService {

  private tareas:Tarea[];
  constructor() { 
    this.tareas=[
      new Tarea(1,"Planificar",1.2,1),
      new Tarea(2,"Analiza",6,2),
      new Tarea(3,"Testar",2,1)
    ];
  }
  getTarea():Tarea[]{
    return this.tareas;
  }
}
