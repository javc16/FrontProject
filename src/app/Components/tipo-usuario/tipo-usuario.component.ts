import { Component, OnInit } from '@angular/core';
import { TipoUsuario } from 'src/app/Models/TipoUsuario';
import { TipoUsuarioService } from 'src/app/Services/tipoUsuario/tipo-usuario.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {
  tipoUssuarios: TipoUsuario[] = [];
  displayedColumns: string[] = ['id', 'descripcion','action'];

  constructor(private _tipoUsuarioService:TipoUsuarioService,private router: Router) {}

  ngOnInit(): void {
    this._tipoUsuarioService.getData().subscribe((data:any[])=>{
      this.tipoUssuarios=data;
      console.log(this.tipoUssuarios);
    })
  }

  create(){
    this.router.navigate(['creartipousuario']);
  }

  delete(tipoUsuario:TipoUsuario) {  
    this._tipoUsuarioService.delete(tipoUsuario)
      .subscribe((res: any) => {
        this._tipoUsuarioService.getData().subscribe((res: any[])=>{
          this.tipoUssuarios= res;          
        })
        
      });     
  }


}
