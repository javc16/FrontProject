import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Models/Proveedor';
import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: []
})
export class ProveedorComponent implements OnInit {

  id!:number;
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

  eliminar(proveedores:Proveedor){
    if(confirm('Esta seguro que desea eliminar el registro?')){
      this._proveedorService.deleteProveedor(proveedores).subscribe(data =>{
        this._proveedorService.getData().subscribe((data:any[])=>{
          this.proveedores=data;
          console.log(this.proveedores);
        })
      })
  }
}

  agregar(){
    this.router.navigate(['agregarproveedor']);
  }

}
