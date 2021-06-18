import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoUsuarioComponent } from './Components/tipo-usuario/tipo-usuario.component';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { CreateTipoUsuarioComponent } from './Components/tipo-usuario/create-tipo-usuario/create-tipo-usuario.component';
import { ProveedorComponent } from './Components/proveedor/listaProveedor/lista-proveedor.component';
import { AgregarComponent } from './Components/proveedor/agregarProveedor/agregar-proveedor.component';
import { VistaprincipalComponent } from './Components/proveedor/vistaprincipal/vistaprincipal.component';
import { TipoArticuloComponent } from './Components/tipo-articulo/tipo-articulo.component';
import { CreateTipoArticuloComponent } from './Components/tipo-articulo/create-tipo-articulo/create-tipo-articulo.component';
import { TipoServicioComponent } from './Components/tipo-servicio/tipo-servicio.component';
import { CreateTipoServicioComponent } from './Components/tipo-servicio/create-tipo-servicio/create-tipo-servicio.component';
import { UsuarioComponent } from './Components/usuario/agregarUsuario/agregar-usuario.component';
import { ListaUsuarioComponent } from './Components/usuario/listaUsuario/lista-usuario.component';
import { ServicioComponent } from './Components/servicio/servicio.component';
import { CreateServicioComponent } from './Components/servicio/create-servicio/create-servicio.component';

const routes: Routes = [
  {
    path: 'createservicio',
    component: CreateServicioComponent,
  },
  {
    path: 'servicio',
    component: ServicioComponent,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'tipoServicio',
    component: TipoServicioComponent,
  },
  {
    path: 'creartiposervicio',
    component: CreateTipoServicioComponent,
  },
  {
    path: 'tipoArticulo',
    component: TipoArticuloComponent,
  },
  {
    path: 'creartipoarticulo',
    component: CreateTipoArticuloComponent,
  },
  {
    path: 'tipoUsuario',
    component: TipoUsuarioComponent,
  },
  {
    path: 'creartipousuario',
    component: CreateTipoUsuarioComponent,
  },
  {
    path: 'proveedor',
    component: ProveedorComponent
  },
  {
    path: 'agregarproveedor',
    component: AgregarComponent
  },
  {
    path: 'vistaprincipal',
    component: VistaprincipalComponent
  },
  {
    path: 'listausuario',
    component: ListaUsuarioComponent
  },
  {
    path: 'agregarusuario',
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
