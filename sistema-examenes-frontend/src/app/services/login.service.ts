import { JsonPipe } from '@angular/common';
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
    //113.-Ir al login.component.ts, esta en la carpeta login
  }

  //118.-Iniciamos Sección y establecemos el token en el localStorage
  public loginUser(token: any) {
    localStorage.setItem("token", token);
  }

  //119.-Metodo para comprobar si estoy conecptado o no
  public isLoggeIn() {
    let tokenStr = localStorage.getItem('token');

    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //120.-Cerramo seccion y eliminamos del token del localStorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //121.-Obtenemos el token
  public getToken() {
    return localStorage.getItem('token');
  }

  //122.-Para establecer un usuario
  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //123.-Obtenemos un usuario
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //124.- Obtenemos el rol de usuario
  public getUserRole() {
    let user = this.getUser();
    return user.authoriries[0].authoriries;
  }
}
