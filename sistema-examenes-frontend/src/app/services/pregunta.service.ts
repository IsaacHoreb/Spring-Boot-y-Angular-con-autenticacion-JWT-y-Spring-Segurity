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

  

}
