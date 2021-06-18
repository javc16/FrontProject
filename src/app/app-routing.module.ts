import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoUsuarioComponent } from './Components/tipo-usuario/tipo-usuario.component';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { CreateTipoUsuarioComponent } from './Components/tipo-usuario/create-tipo-usuario/create-tipo-usuario.component';
import { ProveedorComponent } from './Components/proveedor/lista/proveedor.component';
import { AgregarComponent } from './Components/proveedor/agregar/agregar.component';
import { VistaprincipalComponent } from './Components/proveedor/vistaprincipal/vistaprincipal.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
