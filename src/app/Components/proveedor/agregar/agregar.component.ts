import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import { Proveedor } from '../../../Models/Proveedor';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  nombre!:string;
  apellido!:string;
  email!:string;
  telefono!:string;
  empresa!:string;
  direccion!:string;
  estado!:number;
  image!:string;

  private proveedor!:Proveedor;

  constructor(private _proveedorService:ProveedorService, private router: Router){}


  ngOnInit(): void { }

  cancel() {
    this.router.navigate(['proveedor']);
  }

  create() {

    debugger;
    this.proveedor = {Id:1,Nombre:this.nombre,
                           Apellido:this.apellido,
                           Email:this.email,
                           Telefono:this.telefono,
                           Empresa:this.empresa,
                           Direccion:this.direccion,
                           Estado:this.estado,
                           Image:this.image};

       console.log(this.proveedor)

      debugger;
        this._proveedorService.create(this.proveedor)
          .subscribe((res: any) => {
          this.router.navigate(['proveedor']).then(() => {
            window.location.reload();
          });
      });
  }
}
