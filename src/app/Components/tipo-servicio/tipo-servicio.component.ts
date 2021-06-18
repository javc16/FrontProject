import { Component, OnInit } from '@angular/core';
import { TipoServicio } from 'src/app/Models/TipoServicio';
import { TipoServicioService } from 'src/app/Services/tipoServicio/tipo-servicio.service';
import {Router} from '@angular/router'
import { TipoUsuarioService } from '../../Services/tipoUsuario/tipo-usuario.service';

@Component({
  selector: 'app-tipo-servicio',
  templateUrl: './tipo-servicio.component.html',
  styleUrls: ['./tipo-servicio.component.css']
})
export class TipoServicioComponent implements OnInit {

  tipoServicios: TipoServicio[] = [];
  displayedColumns: string[] = ['id', 'descripcion','tipo', 'estado', 'action'];
  constructor(private _tipoServicioService:TipoServicioService,private router: Router) { }

  ngOnInit(): void {
    this._tipoServicioService.getData().subscribe((data:any[])=>{
      this.tipoServicios=data;
      console.log(this.tipoServicios);
    })
  }

  create(){
    this.router.navigate(['creartiposervicio']);
  }

  delete(tipoServicio:TipoServicio){
    if(confirm('Esta seguro que desea eliminar el registro?')){
      this._tipoServicioService.delete(tipoServicio).subscribe(data =>{
        this._tipoServicioService.getData().subscribe((data:any[])=>{
          this.tipoServicios=data;
          console.log(this.tipoServicios);
        })
      })
  }
}

}
