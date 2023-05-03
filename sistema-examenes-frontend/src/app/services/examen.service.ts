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

  //348.-Agreamos metodo para eliminar
  //349.-Ir a  view-examenes.component.ts
  public eliminarExamen(examenId: any) {
    return this.http.delete(`${baserUrl}/examen/${examenId}`);
  }

  //354.-Agregar metodo para obtener examen
  //355.-Ir a actualizar-examen.components.ts
  public obtenerExamen(examenId: any) {
    return this.http.get(`${baserUrl}/examen/${examenId}`);
  }

  //365.-Agregar metodo para actualizar examen
  //366.-Ir a actualizar-examen.component.ts
  public actualizarExamen(examen: any) {
    return this.http.put(`${baserUrl}/examen/`, examen);
  }

}
//305.- Nos vamos a view-examenes.component.ts
