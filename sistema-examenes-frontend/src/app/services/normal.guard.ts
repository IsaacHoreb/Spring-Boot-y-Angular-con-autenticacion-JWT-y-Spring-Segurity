import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class NormalGuard implements CanActivate {

  //Añadir
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //150.- Esto sirve para saber si estamos conectamos y que es de rol ADMIN PARA CARGAR LOS COMPONENTES
    //en caso contrario, nos regresa al login
    if (this.loginService.isLoggeIn() && this.loginService.getUserRole() == 'NORMAL') {
      return true;
    }
    this.router.navigate(['login']); //añadir
    return false; //cambiamos a false
  }
  //151.-Nos vamos a app-routing.modules.ts

}
