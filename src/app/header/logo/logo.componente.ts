import { Component, OnInit } from '@angular/core';
import { LogoService } from '../../services/logoservice';

@Component({
  selector: 'sel-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponente{

  showM:boolean=false;
  fraseLocal:String="";
  constructor(private _logoServicio:LogoService) {}

  changeM(){
    this.fraseLocal=this._logoServicio.decirHola();
    this.showM=!this.showM;
  }

}
