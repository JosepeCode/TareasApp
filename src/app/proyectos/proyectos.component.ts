import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../modelos/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[];

  constructor() { }

  ngOnInit() {

    this.proyectos=[
      new Proyecto(1,"App Móvil"),
      new Proyecto(2,"MyApp")      
    ];
    
  }

}
