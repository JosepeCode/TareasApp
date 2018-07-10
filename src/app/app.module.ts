import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TareasComponent } from './tareas/tareas.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { LogoComponente } from './header/logo/logo.componente';
import { MenuComponent } from './header/menu/menu.component';
import { LogoService } from './services/logoservice'
import { TareasServiceService } from './services/tareasService';
import { ProyectoServiceService } from './services/proyectoService';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    TareasComponent,
    HeaderComponent,
    SectionComponent,
    LogoComponente,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogoService, TareasServiceService, ProyectoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
