import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
//380.-Agregamos
export class PreguntaService {

  constructor(private http: HttpClient) { }

  //389.-Agregamos el /todo/ en el metodo
  //390.-Ir al CMD en admin, y agregamos componente con: ng g c add-pregunta
  //391.-Después, agregamos la ruta en el app-routing.module.ts
  public listarPreguntasDelExamen(examenId: any) {
    return this.http.get(`${baserUrl}/pregunta/examen/todos/${examenId}`)
  }
  //381.-Ir a view-examen-preguntas.component.ts

  //411.- agregamos metodo para guardar
  public guardarPregunta(pregunta: any) {
    return this.http.post(`${baserUrl}/pregunta/`, pregunta);
  }

  //412.-Ir a add-pregunta.component.ts

  //418.-Metodo eliminar pregunta
  //419.-Ir a view-examen-preguntas.component.html
  public eliminarPregunta(preguntaId: any) {
    return this.http.delete(`${baserUrl}/pregunta/${preguntaId}`)
  }

  //423.-Metodo de actualizar pregunta
  public actualizarPregunta(pregunta: any) {
    return this.http.put(`${baserUrl}/pregunta/`, pregunta);
  }//423.1-Creamos un metodo para obtener pregunta
  public obtenerPregunta(preguntaId: any) {
    return this.http.get(`${baserUrl}/pregunta/${preguntaId}`)
  }//424.-Ir a app-routing.module.ts



}
