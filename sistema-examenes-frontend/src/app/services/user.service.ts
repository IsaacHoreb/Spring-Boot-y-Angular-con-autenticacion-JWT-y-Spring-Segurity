import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //39.-Importo el HttpClient para conectar con el RestContoller del Backend
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  //39.1-Lo agrego al constructor
  constructor(private httpClient: HttpClient) { }

  //40.- Creamos metodo
  public anadirUsuario(user: any) {
    return this.httpClient.post(`${baserUrl}/usuarios/`, user);
  }

  //41.- Nos vamos a signup.component.ts

}
