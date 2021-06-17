import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoUsuarioComponent } from './Components/tipo-usuario/tipo-usuario.component';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { CreateTipoUsuarioComponent } from './Components/tipo-usuario/create-tipo-usuario/create-tipo-usuario.component';
import { ProveedorComponent } from './Components/proveedor/lista/proveedor.component';
import { AgregarComponent } from './Components/proveedor/agregar/agregar.component';
import { TipoArticuloComponent } from './Components/tipo-articulo/tipo-articulo.component';
import { CreateTipoArticuloComponent } from './Components/tipo-articulo/create-tipo-articulo/create-tipo-articulo.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
