import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoServicio } from 'src/app/Models/TipoServicio';
import { TipoServicioService } from 'src/app/Services/tipoServicio/tipo-servicio.service';

@Component({
  selector: 'app-create-tipo-servicio',
  templateUrl: './create-tipo-servicio.component.html',
  styleUrls: ['./create-tipo-servicio.component.css']
})
export class CreateTipoServicioComponent implements OnInit {

  descripcion!:string;
  tipo!:string;
  estado!:number;

  private tipoServicio!:TipoServicio;

  constructor(private _tipoServicioService:TipoServicioService,private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['tipoServicio']);
  }

  create() 
  {  
    debugger;
    this.tipoServicio = {Id:1,Descripcion:this.descripcion,Tipo:this.tipo,Estado:1};    
       console.log(this.tipoServicio)
   debugger;
    this._tipoServicioService.create(this.tipoServicio)
      .subscribe((res: any) => {     
          this.router.navigate(['tipoServicio']).then(() => {
            window.location.reload();
          });       
      });
  }

}
