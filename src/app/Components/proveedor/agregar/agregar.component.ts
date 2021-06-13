import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProveedorService } from 'src/app/Services/Proveedor/proveedor.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor(private _proveedorService:ProveedorService,private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['proveedor']);
  }

}
