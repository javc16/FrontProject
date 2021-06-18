import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';


import { TipoUsuarioComponent } from './Components/tipo-usuario/tipo-usuario.component';
import { EditTipoUsuarioComponent } from './Components/tipo-usuario/edit-tipo-usuario/edit-tipo-usuario.component';
import { CreateTipoUsuarioComponent } from './Components/tipo-usuario/create-tipo-usuario/create-tipo-usuario.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProveedorComponent } from './Components/proveedor/lista/proveedor.component';
import { AgregarComponent } from './Components/proveedor/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { RecomendacionComponent } from './Components/recomendacion/recomendacion.component';
import { MaestroProveedorComponent } from './Components/maestro-proveedor/maestro-proveedor.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateRecomendacionComponent } from './Components/recomendacion/create-recomendacion/create-recomendacion.component';
import { EditRecomendacionComponent } from './Components/recomendacion/edit-recomendacion/edit-recomendacion.component';
import { CrearMaestroProveedorComponent } from './Components/maestro-proveedor/crear-maestro-proveedor/crear-maestro-proveedor.component';
import { EditMaestroProveedorComponent } from './Components/maestro-proveedor/edit-maestro-proveedor/edit-maestro-proveedor.component';
import { TipoArticuloComponent } from './Components/tipo-articulo/tipo-articulo.component';
import { CreateTipoArticuloComponent } from './Components/tipo-articulo/create-tipo-articulo/create-tipo-articulo.component';
import { EditTipoArticuloComponent } from './Components/tipo-articulo/edit-tipo-articulo/edit-tipo-articulo.component';
import { TipoServicioComponent } from './Components/tipo-servicio/tipo-servicio.component';
import { CreateTipoServicioComponent } from './Components/tipo-servicio/create-tipo-servicio/create-tipo-servicio.component';


@NgModule({
  declarations: [
    AppComponent,
    TipoUsuarioComponent,
    EditTipoUsuarioComponent,
    CreateTipoUsuarioComponent,
    NavbarComponent,
    FooterComponent,
    ProveedorComponent,
    AgregarComponent,
<<<<<<< HEAD
    RecomendacionComponent,
    MaestroProveedorComponent,
    DashboardComponent,
    CreateRecomendacionComponent,
    EditRecomendacionComponent,
    CrearMaestroProveedorComponent,
    EditMaestroProveedorComponent
=======
    TipoArticuloComponent,
    CreateTipoArticuloComponent,
    EditTipoArticuloComponent,
    TipoServicioComponent,
    CreateTipoServicioComponent
>>>>>>> ddcb02a88297a29ded1f812278c321378943a7b2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
