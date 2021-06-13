import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/Proveedor';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: []
})
export class ProveedorComponent implements OnInit {

  proveedores:Proveedor [] = [];
  displayedColumns: string[] = ['Id',
                                'Nombre',
                                'Apellido',
                                'Email',
                                'Telefono',
                                'Empresa',
                                'Direccion',
                                'Estado',
                                'action'];

  constructor(private _proveedorService:ProveedorService,private router: Router) {}

  ngOnInit(): void {
    this._proveedorService.getData().subscribe((data:any[])=>{
      this.proveedores=data;
      console.log(this.proveedores);
    })
  }

}
