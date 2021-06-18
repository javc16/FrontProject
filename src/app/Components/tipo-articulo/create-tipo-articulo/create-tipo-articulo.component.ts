import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoArticulo } from 'src/app/Models/TipoArticulo';
import { TipoArticuloService } from 'src/app/Services/tipoArticulo/tipo-articulo.service';

@Component({
  selector: 'app-create-tipo-articulo',
  templateUrl: './create-tipo-articulo.component.html',
  styleUrls: ['./create-tipo-articulo.component.css']
})
export class CreateTipoArticuloComponent implements OnInit {

  descripcion!:string;
  tipo!:string;
  estado!:number;

  private tipoArticulo!:TipoArticulo;

  constructor(private _tipoArticuloService:TipoArticuloService,private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['tipoArticulo']);
  }

  create() 
  {  
    debugger;
    this.tipoArticulo = {Id:1,Descripcion:this.descripcion,Tipo:this.tipo,Estado:1};    
       console.log(this.tipoArticulo)
   debugger;
    this._tipoArticuloService.create(this.tipoArticulo)
      .subscribe((res: any) => {     
          this.router.navigate(['tipoArticulo']).then(() => {
            window.location.reload();
          });       
      });
  }

}
