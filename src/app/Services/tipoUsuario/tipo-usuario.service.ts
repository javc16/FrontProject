import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoUsuario } from 'src/app/Models/TipoUsuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {  
  private url:string;

  constructor(private http: HttpClient) 

  {

    this.url =  "http://demo.evdapps.com/api/TipoUsuario";

  }

  getData(): Observable<TipoUsuario[]> {
    return this.http.get<TipoUsuario[]>(this.url);
  }

  create(tipoUsuario: TipoUsuario) {
    return this.http.post(this.url, tipoUsuario);
  }

  
  delete(tipoUsuario: TipoUsuario){
    debugger;    
    return this.http.put(this.url, tipoUsuario);
  }
}
