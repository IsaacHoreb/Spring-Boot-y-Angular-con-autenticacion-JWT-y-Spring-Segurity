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
}
//305.- Nos vamos a view-examenes.component.ts