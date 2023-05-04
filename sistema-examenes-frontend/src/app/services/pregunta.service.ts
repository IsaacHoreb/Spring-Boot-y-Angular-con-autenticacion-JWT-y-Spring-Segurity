import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
//380.-Agregamos
export class PreguntaService {

  constructor(private http: HttpClient) { }

  public listarPreguntasDelExamen(examenId: any) {
    return this.http.get(`${baserUrl}/pregunta/examen/${examenId}`)
  }
  //381.-Ir a view-examen-preguntas.component.ts
}
