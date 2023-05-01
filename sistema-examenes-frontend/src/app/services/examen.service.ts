import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})

//304.- Ingresamos lo sig
export class ExamenService {

  constructor(private http: HttpClient) { }

  public listarCuestionario() {
    return this.http.get(`${baserUrl}/examen/`);
  }

  //337.-Agregamos metodo
  //338.-Regresamos a add-examen.component.ts
  public agregarExamen(examen: any) {
    return this.http.post(`${baserUrl}/examen/`, examen);
  }

}
//305.- Nos vamos a view-examenes.component.ts
