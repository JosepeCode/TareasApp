import { Injectable } from '@angular/core';

@Injectable()
export class LogoService {

  frase:string="Hello world";

  decirHola(){
    return this.frase;
  }
  constructor() { }
}
