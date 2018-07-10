import { Component, OnInit } from '@angular/core';
import {Proyecto} from '../modelos/proyecto';
import { ProyectoServiceService } from '../services/proyectoService';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos:Proyecto[];

  constructor(private _proyectosService:ProyectoServiceService) { }

  ngOnInit() {
    this.proyectos=this._proyectosService.getProyecto();
  }

}
