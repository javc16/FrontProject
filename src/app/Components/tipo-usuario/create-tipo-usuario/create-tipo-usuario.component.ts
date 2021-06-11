import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoUsuarioService } from 'src/app/Services/tipoUsuario/tipo-usuario.service';

@Component({
  selector: 'app-create-tipo-usuario',
  templateUrl: './create-tipo-usuario.component.html',
  styleUrls: ['./create-tipo-usuario.component.css']
})
export class CreateTipoUsuarioComponent implements OnInit {

  constructor(private _tipoUsuarioService:TipoUsuarioService,private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['tipoUsuario']);
  }

}
