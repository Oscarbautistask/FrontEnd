import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

//RUTAS
import {APP_ROUTING} from './app.routes';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './Componentes/principal/principal.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { AgregarEquiposComponent } from './Componentes/agregar-equipos/agregar-equipos.component';
import { IndexEquiposComponent } from './Componentes/index-equipos/index-equipos.component';
import { from } from 'rxjs';
import { IndexAccesoriosComponent } from './Componentes/index-accesorios/index-accesorios.component';
import { AgregarAccesoriosComponent } from './Componentes/agregar-accesorios/agregar-accesorios.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    AgregarEquiposComponent,
    IndexEquiposComponent,
    IndexAccesoriosComponent,
    AgregarAccesoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
