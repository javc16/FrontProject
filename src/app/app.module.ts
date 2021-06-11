import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';


import { TipoUsuarioComponent } from './Components/tipo-usuario/tipo-usuario.component';
import { EditTipoUsuarioComponent } from './Components/tipo-usuario/edit-tipo-usuario/edit-tipo-usuario.component';
import { CreateTipoUsuarioComponent } from './Components/tipo-usuario/create-tipo-usuario/create-tipo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoUsuarioComponent,
    EditTipoUsuarioComponent,
    CreateTipoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
