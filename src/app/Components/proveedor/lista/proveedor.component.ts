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

//   eliminar(id: number){
//     if(confirm('Esta seguro que desea eliminar el registro?')){
//       this._proveedorService.eliminar(id).subscribe(data =>{
//         this._proveedorService.getData();
//       })
//   }
// }

  agregar(){
    this.router.navigate(['agregarproveedor']);
  }

}