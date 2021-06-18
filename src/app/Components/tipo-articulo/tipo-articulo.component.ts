import { Component, OnInit } from '@angular/core';
import { TipoArticulo } from 'src/app/Models/TipoArticulo';
import { TipoArticuloService } from 'src/app/Services/tipoArticulo/tipo-articulo.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tipo-articulo',
  templateUrl: './tipo-articulo.component.html',
  styleUrls: ['./tipo-articulo.component.css']
})
export class TipoArticuloComponent implements OnInit {

  tipoArticulos: TipoArticulo[] = [];
  displayedColumns: string[] = ['id', 'descripcion','tipo', 'estado', 'action'];

  constructor(private _tipoArticuloService:TipoArticuloService,private router: Router) { }

  ngOnInit(): void {
    this._tipoArticuloService.getData().subscribe((data:any[])=>{
      this.tipoArticulos=data;
      console.log(this.tipoArticulos);
    })
  }

  create(){
    this.router.navigate(['creartipoarticulo']);
  }

  delete(tipoArticulo:TipoArticulo) {  
    this._tipoArticuloService.delete(tipoArticulo)
      .subscribe((res: any) => {
        this._tipoArticuloService.getData().subscribe((res: any[])=>{
          this.tipoArticulos= res;          
        })
        
      });     
  }

}
