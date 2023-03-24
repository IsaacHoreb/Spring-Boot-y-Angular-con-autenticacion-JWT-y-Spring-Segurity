import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  //111.-Agregamos en HttpClient
  constructor(private http: HttpClient) { }

  //112.-Llama a un metodo al servidor en el Backend y genera el token
  public generateToken(loginData: any) {
    return this.http.post(`${baserUrl}/generate-token`, loginData);
  }

  //113.-Ir al login.component.ts, esta en la carpeta login

}
