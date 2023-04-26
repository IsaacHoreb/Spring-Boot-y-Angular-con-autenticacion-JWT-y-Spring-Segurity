import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})

//273.- Ingresamos
export class CategoriaService {

  //ingresa esto en el constructor
  constructor(private http: HttpClient) { }

  //Creamos un metodo
  public listarCategorias() {
    return this.http.get(`${baserUrl}/categoria/`)
  }

  //288.-Creamos metodo
  public agregarCategorias(categoria: any) {
    return this.http.post(`${baserUrl}/categoria/`, categoria)
  }

}
//274.-Ir a view-categoria.component.ts