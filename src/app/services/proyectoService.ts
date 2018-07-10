import { Injectable } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';

@Injectable()
export class ProyectoServiceService {
  private proyectos:Proyecto[];

  constructor() { 
    this.proyectos=[
      new Proyecto(1,"App Móvil"),
      new Proyecto(2,"MyApp")      
    ];
  }
  getProyecto():Proyecto[]{
    return this.proyectos;
  }
}
