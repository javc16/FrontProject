import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoArticulo } from 'src/app/Models/TipoArticulo';

@Injectable({
  providedIn: 'root'
})
export class TipoArticuloService {
  private url:string;

  constructor(private http: HttpClient) 
  {

    this.url =  "http://38.17.54.162:8083/api/tipoarticulo";

   }

   getData(): Observable<TipoArticulo[]> {
    return this.http.get<TipoArticulo[]>(this.url);
  }

  create(tipoArticulo: TipoArticulo) {
    return this.http.post(this.url, tipoArticulo);
  }

  delete(tipoArticulo: TipoArticulo){
    debugger;    
    return this.http.put(this.url, tipoArticulo);
  }

}
