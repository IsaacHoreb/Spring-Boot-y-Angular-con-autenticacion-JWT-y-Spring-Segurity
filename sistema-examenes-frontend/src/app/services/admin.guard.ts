import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

//147.-Agregamos lo sig
export class AdminGuard implements CanActivate {
  //Añadir
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //148.- Esto sirve para saber si estamos conectamos y que es de rol ADMIN PARA CARGAR LOS COMPONENTES
    //en caso contrario, nos regresa al login
    if (this.loginService.isLoggeIn() && this.loginService.getUserRole() == 'ADMIN') {
      return true;
    }
    this.router.navigate(['login']); //añadir
    return false; //cambiamos a false
  }
  //149.-Nos vamos al normal.guard.ts
}
